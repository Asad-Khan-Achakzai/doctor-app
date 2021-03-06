import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType
} from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('filePicker',{static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  selectedImage :any;
  usePicker = false;

  constructor( private doctorService:DoctorService,private platform: Platform,private patientService: PatientServiceService,public dms: DomSanitizer) {}

  ngOnInit() {
    setTimeout(() => {
      if(this.doctorService.doctorImage){
        this.selectedImage = this.doctorService.doctorImage;
      }
    }, 1000);   
    console.log('Mobile:', this.platform.is('mobile'));
    console.log('Hybrid:', this.platform.is('hybrid'));
    console.log('iOS:', this.platform.is('ios'));
    console.log('Android:', this.platform.is('android'));
    console.log('Desktop:', this.platform.is('desktop'));
    if (
      (this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }

  onPickImage() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64
    })
      .then(image => {
        this.selectedImage = 'data:image/jpeg;base64,'+image.base64String;
        this.patientService.imageURL = this.selectedImage;
        console.log('cam image = ',this.selectedImage);
        this.imagePick.emit(image.base64String);
      })
      .catch(error => {
        console.log(error);
        if (this.usePicker) {
          this.filePickerRef.nativeElement.click();
        }
        return false;
      });
  }

  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.patientService.imageURL = dataUrl;
      // this.customerService.imageURL = dataUrl;
       console.log('imageurl of service = ',this.patientService.imageURL)

      // this.selectedImage = this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64," + dataUrl);
  //this.selectedImage = 'data:image/jpeg;base64,'+dataUrl;
  this.selectedImage = '../../assets/selected.png';
      this.imagePick.emit(pickedFile);
      //console.log('pickedfile = ',pickedFile);
    };
    fr.readAsDataURL(pickedFile);
    console.log('readAsDataURL = ',fr.result);

  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController, Platform, AlertController, ModalController } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkup-timing',
  templateUrl: './checkup-timing.component.html',
  styleUrls: ['./checkup-timing.component.scss'],
})
export class CheckupTimingComponent implements OnInit {
  Form: FormGroup;
  timingValueFrom;
  timingValueEnd;
  slots: any = [];
  Days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  count: number;
  doctorCheckupTIming: any;
  constructor(private storage: Storage, private modalCtrl: ModalController, public datepipe: DatePipe, private doctorService: DoctorService, private menu: MenuController, public toastController: ToastController, private router: Router, private formBuilder: FormBuilder, private platform: Platform, public alertController: AlertController) { }

  async ngOnInit() {
    this.Form = this.formBuilder.group({
      timingStart: [],
      timingEnd: [],
      diagnoseTime: [],
      slots: [[]],
      numberOfSlots: [],
      offDays: [[]]
      //confirmPassword: [null, [Validators.required]],
    });
    this.doctorCheckupTIming = await this.storage.get('doctorCheckupTime');
    this.Form.patchValue(JSON.parse(this.doctorCheckupTIming));
    console.log('times =',JSON.parse(this.doctorCheckupTIming));
    this.timingValueFrom = JSON.parse(this.doctorCheckupTIming).timingStart;
    this.timingValueEnd =  JSON.parse(this.doctorCheckupTIming).timingEnd;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  submit() {
    let startTime = this.timingValueFrom;
    let endTime = this.timingValueEnd;
    this.createSlots();
    this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');
    this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');
    this.Form.patchValue({ slots: this.slots, numberOfSlots: this.count, timingStart: startTime, timingEnd: endTime });
    console.log('form =', this.Form.value);
    this.doctorService.doctorTiming = this.Form.value;
    this.modalCtrl.dismiss();
  }
  createSlots() {
    debugger;
    let diagnoseTIme;
    if (this.Form.value['diagnoseTime'] == '1h') {
      diagnoseTIme = 3600000;
    } else {
      diagnoseTIme = 30 * 60000;
    }
    this.timingValueFrom = new Date(this.timingValueFrom);
    //this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');
    this.timingValueEnd = new Date(this.timingValueEnd);
    // this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');
    console.log('start time ', this.timingValueFrom);

    console.log('end time ', this.timingValueEnd);
    this.count = 0;
    let dif = this.timingValueFrom.getTime();
    while (dif < this.timingValueEnd.getTime()) {
      let slotN = 'slot' + Math.floor(Math.random() * 1000) + 1;
      this.count++;
      let slot = new Date(dif);
      this.slots.push({ DateAndTime: this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'), status: 'empty', slotNumber: this.count, slotId: slotN })
      // console.log("Hour Slot --->" + this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'));
      dif += diagnoseTIme;
    }
    this.slots.splice(this.slots.length - 1, 1)
    console.log('this.slots --->', this.slots);

  }
}

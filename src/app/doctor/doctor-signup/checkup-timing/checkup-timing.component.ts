import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController, Platform, AlertController, ModalController } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';

@Component({
  selector: 'app-checkup-timing',
  templateUrl: './checkup-timing.component.html',
  styleUrls: ['./checkup-timing.component.scss'],
})
export class CheckupTimingComponent implements OnInit {
  Form: FormGroup;
  timingValueFrom;
  timingValueEnd;
  slots = [];
  Days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  count: number;
  constructor(private modalCtrl: ModalController, public datepipe: DatePipe, private doctorService: DoctorService, private menu: MenuController, public toastController: ToastController, private router: Router, private formBuilder: FormBuilder, private platform: Platform, public alertController: AlertController) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      timingStart: [],
      timingEnd: [],
      diagnoseTime: [],
      slots: [[]],
      numberOfSlots: [],
      offDays: [[]]
      //confirmPassword: [null, [Validators.required]],
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  submit() {
    let startTime = this.timingValueFrom;
    let endTime = this.timingValueEnd;
    this.createSlots();
    if (this.slots.length > 0) {
      this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');
      this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');

      this.Form.patchValue({ slots: this.slots, numberOfSlots: this.count, timingStart: startTime, timingEnd: endTime });
      console.log('form =', this.Form.value);
      this.doctorService.doctorTiming = this.Form.value;
      this.modalCtrl.dismiss();
    }
    else {
      alert('Please provide proper date');
    }
  }
  createSlots() {
let slotTime = 0;
    let diagnoseTIme;
    if (this.Form.value['diagnoseTime'] == '1h') {
      slotTime = 60;
      diagnoseTIme = 3600000;
    } else {
      slotTime = 30;
      diagnoseTIme = 30 * 60000;
    }
    this.timingValueFrom = new Date(this.timingValueFrom);
    //this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');
    this.timingValueEnd = new Date(this.timingValueEnd);
    // this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');
    console.log('start time ', this.timingValueFrom);

    console.log('end time ', this.timingValueEnd);
    debugger;
    let startTime: any = this.datepipe.transform(this.timingValueFrom, 'yyyy-MM-dd hh:mm');
    let endTime: any = this.datepipe.transform(this.timingValueEnd, 'yyyy-MM-dd hh:mm');
    //Parse In
    var parseIn = function (date_time) {
      var d = new Date();
      d.setHours(date_time.substring(11, 13));
      d.setMinutes(date_time.substring(14, 16));

      return d;
    }

    //make list
    var getTimeIntervals = (time1, time2) => {
      var arr = [];
      this.count = 0;
      while (time1 < time2) {
        this.count++;
        let slotN = 'slot' + Math.floor(Math.random() * 1000) + 1;
        let slot = time1.toTimeString().substring(0, 5);
        arr.push(slot);
        this.slots.push({ DateAndTime: slot, status: 'empty', slotNumber: this.count, slotId: slotN })

        time1.setMinutes(time1.getMinutes() + slotTime);
        console.log('arr ', arr)

      }
      return arr;
    }

    startTime = parseIn(startTime);
    endTime = parseIn(endTime);

    var intervals = getTimeIntervals(startTime, endTime);

    console.log(intervals);

    // this.count = 0;
    // let dif = this.timingValueFrom.getTime();
    // while (dif < this.timingValueEnd.getTime()) {
    //   let slotN = 'slot' + Math.floor(Math.random() * 1000) + 1;
    //   this.count++;
    //   let slot = new Date(dif);
    //   this.slots.push({ DateAndTime: this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'), status: 'empty', slotNumber: this.count, slotId: slotN })
    //   // console.log("Hour Slot --->" + this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'));
    //   dif += diagnoseTIme;
    // }
    // this.slots.splice(this.slots.length - 1, 1)
    console.log('this.slots --->', this.slots);

  }
}

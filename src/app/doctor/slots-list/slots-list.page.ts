import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { BookingsService } from 'src/app/sdk/custom/bookings.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
@Component({
  selector: 'app-slots-list',
  templateUrl: './slots-list.page.html',
  styleUrls: ['./slots-list.page.scss'],
})
export class SlotsListPage implements OnInit {
  slots = [];
  dateObj: any;
  bookedSlots = [];
  slotsArray = [];
  emptySlots: any;
  bookAppointment: any;

  constructor(private _translate: TranslateService,private bookingService: BookingsService, private patientService: PatientServiceService, private storage: Storage) { }

  async ngOnInit() {
    this._translate.setDefaultLang(await this.storage.get('language'));
    this._translate.get("SlotsList").subscribe((res: any) => {
      console.log('translation = ',res)
    
      this.emptySlots = res.emptySlots;
      this.bookAppointment = res.bookAppointment;
    });
    let slots = await this.storage.get('doctorSlots');
    slots = JSON.parse(slots);
    this.slots = slots.slots
    this.dateObj = slots.date;
    console.log('slotslots=====>', slots);

    console.log('slots', this.slots);
    this.getAppointments();
  }
  back() { }
  async getAppointments() {
    this.bookingService.appointments({ date: this.dateObj, doctorID: await this.storage.get('doctorId') }).subscribe(
      async data => {
        this.bookedSlots = data.data;
        console.log('appontmens data=====>>>>>>>>> ', data);
        for (let i = 0; i < this.slots.length; i++) {
          // let slot ={
          //   DateAndTime : this.slots[i].DateAndTime,
          //   slotId:this.slots[i].slotId,
          //   slotNumber:this.slots[i].slotNumber,
          //   status:this.slots[i]
          // }
          for (let j = 0; j < this.bookedSlots.length; j++) {
            if ((this.slots[i].slotId == this.bookedSlots[j].slotID) && (this.bookedSlots[j].status=='booked')) {
              this.slots[i].status = 'booked';
            }
          }

        }
        console.log('(this.slots data=====>>>>>>>>> ', this.slots);

        this.slotsArray
      });
  }
  async goToPayment(slot) {
    console.log('slot', slot);
    // this.patientService.payment(slot).subscribe(
    //   async data => {

    //   });
    let id: any = await this.storage.get('patientId');
    let docId: any = await this.storage.get('doctorId');
    let patientName = await this.storage.get('patientName');
    let doctorName = await this.storage.get('doctorName');
    let boyd = {
      patientID: id,
      patientName: JSON.parse(patientName),
      doctorName: JSON.parse(doctorName),
      doctorID: docId,
      date: this.dateObj,
      time: slot.DateAndTime,
      status: 'booked',
      slotID: slot.slotId
    }
    console.log('boyd', boyd);
    this.bookingService.registerBooking(boyd).subscribe(
      async data => {
        console.log('data=====>>>>>>>>> ', data);
      });

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Path} from '../server.config';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }
  public registerBooking(credentials: object): Observable<any> {
    const url = Path.getPath() + '/bookings/registerBooking';
    return this.http.post(url, credentials);
  }
  public getMyAppointments(credentials): Observable<any> {
    console.log('body',credentials);
    const url = Path.getPath() + '/bookings/myAppointments';
    return this.http.post(url, credentials);
  }
  public getDoctorAppointments(credentials): Observable<any> {
    console.log('body',credentials);
    const url = Path.getPath() + '/bookings/doctorAppointments';
    return this.http.post(url, credentials);
  }
  public appointmentDiagnosed(credentials): Observable<any> {
    console.log('body',credentials);
    const url = Path.getPath() + '/bookings/appointmentDiagnosed';
    return this.http.post(url, credentials);
  } 
   public appointments(credentials): Observable<any> {
    console.log('body',credentials);
    const url = Path.getPath() + '/bookings/appointments';
    return this.http.post(url, credentials);
  }
  public deleteAppointments(credentials): Observable<any> {
    console.log('body',credentials);
    const url = Path.getPath() + '/bookings/deleteAppontement';
    return this.http.post(url, credentials);
  }
  
}

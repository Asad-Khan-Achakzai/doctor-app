import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Path} from '../server.config';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  imageURL;
  doctorTiming;
  doctorImage;
  gotDoctorImage = true;
  private fooSubject = new Subject<any>();
  constructor(private http: HttpClient) { }
  //sending image to side menu after user is successfully logined
  publishSomeData(data: any) {
    this.fooSubject.next(data);
}
getObservable(): Subject<any> {
    return this.fooSubject;
}
  public doctorRegister(credentials: object): Observable<any> {
    console.log(Path.getPath() + '/doctor/register');
    const url = Path.getPath() + '/doctors/register';
    return this.http.post(url, credentials);
  }
  public sendMail(credentials: object): Observable<any> {
    const url = Path.getPath() + '/patients/sendMail';
    return this.http.post(url, credentials);
  }
  public udpateDoctor(credentials: any,_id): Observable<any> {
    const url = Path.getPath() + `/doctors/${_id}`;

    return this.http.put(url, credentials);
  }
  public getAllDoctors(): Observable<any> {

    // this url will be http://localhost:3000/providers/login
    const url = Path.getPath() + '/doctors/getAllDoctors';
    // this.observable = this.http.get(url);
    // this.observable.subscribe(
    //   data => {
    //   });
    let data;
    return this.http.post(url,data);

  }
  public login(body): Observable<any> {
    const url = Path.getPath() + '/doctors/Login'; 
    return this.http.post(url,body);
  }
  public getDoctor(body): Observable<any> {
    
    const url = Path.getPath() + '/doctors/getDoctor'; 
    return this.http.post(url,body);
  }
}

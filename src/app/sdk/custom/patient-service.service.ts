import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Path} from '../server.config';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  imageURL;
  constructor(private http: HttpClient) { }
  public userRegister(credentials: object): Observable<any> {
    console.log(Path.getPath() + '/patients/register');
    const url = Path.getPath() + '/patients/register';
    return this.http.post(url, credentials);
  }
  public sendMail(credentials: object): Observable<any> {
    const url = Path.getPath() + '/patients/sendMail';
    return this.http.post(url, credentials);
  }
  public payment(credentials: object): Observable<any> {
    const url = Path.getPath() + '/patients/payment';
    return this.http.post(url, credentials);
  }
  public getPatient(body): Observable<any> {
    const url = Path.getPath() + '/patients/getPatient'; 
    return this.http.post(url,body);
  }
  public login(body): Observable<any> {
    const url = Path.getPath() + '/patients/Login'; 
    return this.http.post(url,body);
  }
  public updatePatient(credentials: any,_id): Observable<any> {
    const url = Path.getPath() + `/patients/${_id}`;

    return this.http.put(url, credentials);
  }
}

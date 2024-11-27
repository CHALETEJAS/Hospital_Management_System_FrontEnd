import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) {}

  private baseurl="http://localhost:9090/api/v1/patients";

  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseurl}`);
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    
    return this.httpClient.post<Patient>(`${this.baseurl}`,patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseurl}/${id}`);
  }

  updatePatient(id:number, patient:Patient):Observable<object>{

    return this.httpClient.put<Patient>(`${this.baseurl}/${id}`,patient);
  }

}

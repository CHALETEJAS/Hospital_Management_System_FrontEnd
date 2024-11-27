import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:9090/api/v3/medicines";

  getMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseurl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseurl}`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseurl}/${id}`);
  }

  updateMedicine(id:number, medicine:Medicine):Observable<Object>{
    return this.httpClient.put<Medicine>(`${this.baseurl}`,medicine);
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

}

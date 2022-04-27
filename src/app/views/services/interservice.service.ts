import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/intervention/';
@Injectable({
  providedIn: 'root'
})
export class InterserviceService {

  constructor(private http: HttpClient) { }

  GetAllInterventions(){
    return this.http.get(API_URL +'getAll');
  }
  GetInterventionById(id:any){
    return this.http.get(API_URL + 'getById',id);
  }
  GetInterventionByName(name:any){
    return this.http.get(API_URL + 'name',name);
  }
  AddIntervention(file:any){
    return this.http.post(API_URL + 'add',file);
  }
  UpdateInterventions(file:any){
    return this.http.put(API_URL + 'update',file);
  }
  DeleteInterventionById(id:any){
    return this.http.post(API_URL + 'delete',id);
  }
}

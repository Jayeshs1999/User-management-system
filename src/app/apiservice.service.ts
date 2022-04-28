import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  //get all data observes
  getAllUsers() :Observable<any>{
    return this.http.get(`${this.apiUrl}`)
  }

  //create data
  createData(data:any):Observable<any>{
    console.log(data,"Data created inside service")
    return this.http.post(`${this.apiUrl}`,data);
  }

  // delete data
  deleteData(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  //update data
  updateData(id:any,data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,data)

  }

  getSingleUserData(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}

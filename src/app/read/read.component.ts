import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  readUser:any;
  successMsg:any;
  constructor(private apiService:ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(response=>{
      console.log("Get All users :",response);
      this.readUser=response.data;
    })
  }

  deleteData(id:any){
    console.log(id)
    this.apiService.deleteData(id).subscribe(response=>{
      console.log(response,"deleted")
      this.successMsg=response.message;
    }) 
    this.apiService.getAllUsers().subscribe(response=>{
      console.log("Get All users :",response);
      this.readUser=response.data;
    })
  }

  getAllData(){
    this.apiService.getAllUsers().subscribe(response=>{
      console.log("Get All users :",response);
      this.readUser=response.data;
    })
  }

  

}

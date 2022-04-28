import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // userForm!:FormGroup
  
  constructor(private apiService:ApiserviceService,private activatedRoute:ActivatedRoute) { }
  errorMsg:any
  successMsg:any
  getParamById:any
  
  ngOnInit(): void {
    this.getParamById=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.getParamById){
      this.apiService.getSingleUserData(this.getParamById).subscribe(response=>{
        console.log(response,"selected update data")
        this.userForm.patchValue({
          'fullname':response.data[0].fullname,
          'email':response.data[0].email,
          'mobile':response.data[0].mobile
        })
      })
    }
   
  }

  userForm=new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required)

  })

  userSubmit(){
    
    if(this.userForm.valid){
      console.log(this.userForm.value)

      this.apiService.createData(this.userForm.value).subscribe(response=>{
        console.log(response, "data added successfully")
        
        this.userForm.reset();
        this.successMsg=response.message
      })
    }
    else
    this.errorMsg="All fields are required"
  }

  updateUser(){
    console.log(this.userForm.value);
    if(this.userForm.valid){
      this.apiService.updateData(this.getParamById,this.userForm.value).subscribe(response=>{
        console.log(response,"data updated successfully")
        this.successMsg=response.message;
      })
    }else{
      this.errorMsg="All Fields are required."
    }
  }


}

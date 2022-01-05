// import { Component,Injectable, OnInit,ViewEncapsulation } from '@angular/core';
// import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
// import {states,citys,types} from './data';
// import { HttpClient,HttpHeaders} from '@angular/common/http';
// import { FileRestrictions } from '@progress/kendo-angular-upload';

// @Component({
//   selector: 'app-upload-resume',
//   templateUrl: './upload-resume.component.html',
//   encapsulation: ViewEncapsulation.None,
//   //styleUrls: ['./upload-resume.component.scss']
//   styles:[
//     `
//     .example {
//       display: flex;
//       justify-content: center;
//   }
//   .wrap {
//       display: flex;
//       justify-content: space-between;
//   }
//   .k-form {
//       width: 400px;
//   }
//   .k-list-horizontal .k-radio-item {
//     margin: 0 10px 0 0;
//   }
//     `
//   ]
  
// })
// export class UploadResumeComponent implements OnInit {
//   uploadSaveUrl = 'saveUrl' // should represent an actual API endpoint
//   uploadRemoveUrl = 'removeUrl'; // should represent an actual API 
//   public phoneNumberValue: string = "";
//   public phoneNumberMask: string = "(999) 000-00-00";
//   public form: FormGroup;
//   public data: any = {
//     candidatename: "",
//     email: "",
//     phoneNumber: this.phoneNumberValue,
//     skill: "",
//     state:"",
//     city:"",
//     type:"",
//     gender:null,
//     dateofbirth: null,
//     highestqualification:"",
//     previouscompany:"",
//     currentcompany:"",
//     upload:""
//   };
//   public states: Array<string> = states;
//   public citys: Array<string> = citys;
//   public types: Array<string> = types;
//   public userImages: Array<any>;
//   public submitted = false;
//   public myRestrictions: FileRestrictions = {
//     allowedExtensions: ['pdf']
//   };
//   constructor(private formBuilder: FormBuilder) { 
    
//   }
//   fileToUpload:any;
  
//   ngOnInit(): void {
//     this.form = new FormGroup({
//       candidatename: new FormControl(this.data.fullName, [Validators.required]),
//       email: new FormControl(this.data.email, [
//         Validators.required,
//         Validators.email,
//       ]),
//       phoneNumber: new FormControl(this.data.phoneNumber, [
//         Validators.required,
//       ]),
//       skill: new FormControl(this.data.comments),
//       state: new FormControl(this.data.state, [Validators.required]),
//       city: new FormControl(this.data.city, [Validators.required]),
//       type: new FormControl(this.data.type, [Validators.required]),
//       gender: new FormControl(this.data.gender, [Validators.required]),
//       dateofbirth: new FormControl(this.data.dateofbirth, [
//         Validators.required,
//       ]),
//       highestqualification: new FormControl(this.data.highestqualification, [Validators.required]),
//       previouscompany: new FormControl(this.data.previouscompany, [Validators.required]),
//       currentcompany: new FormControl(this.data.currentcompany, [Validators.required]),
//       upload: new FormControl(this.data.upload, [Validators.required])
//     });
//   }
//   // public submitForm(): void {
    
//   //   //console.log(this.form.value);
//   // }
//   public fileToUpload:any;
//   // public submitForm(): void {
    
//   //   //console.log(this.form.value);
//   // }
 
//   handleFileInput(e:any)
//   {

//     this.fileToUpload=e?.target?.files[0];
//   }
//   //public value: Date = new Date();


//   public onSubmit() {
//     this.submitted = true;
//     var companydata={
//       candidatename:this.data.candidatename,
//       email:this.data.email,
//       phoneNumber:this.data.phoneNumber,
//       skill:this.data.skill,
//       state:this.data.state,
//       city:this.data.city,
//       type:this.data.type,
//       gender:this.data.gender,
//       highestqualification:this.data.highestqualification,
//       previouscompany: this.data.previouscompany,
//       currentcompany: this.data.currentcompany,
//       dateofbirth:this.data.dateofbirth,
//       upload:this.data.upload,
//     };
//     console.log(companydata);
   

//     // display form values on success
//    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
// }

//   public clearForm(): void {
//     this.submitted = false;
//     this.form.reset();
//   }
// }




import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit,ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { LoginService } from '../../shared/service/login.service';
import { RegisterService } from '../../shared/service/register.service';
import { UpladresumeService } from '../../shared/service/upladresume.service';
import { ResumereportRoutingModule } from '../resumereport/resumereport-routing.module';
import {states,citys,types} from './data';
@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['./upload-resume.component.scss']
  styles:[
    `
    .example {
      display: flex;
      justify-content: center;
  }
  .wrap {
      display: flex;
      justify-content: space-between;
  }
  .k-form {
      width: 400px;
  }
  .k-list-horizontal .k-radio-item {
    margin: 0 10px 0 0;
  }
    `
  ]
  
})

export class UploadResumeComponent implements OnInit {
  uploadSaveUrl = 'saveUrl' // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API 
  public phoneNumberValue: string = "";
  public phoneNumberMask: string = "(999) 000-00-00";
  public form: FormGroup;
  public shortFormat = "MM/dd/yyyy";
  public data: any = {
    candidatename: "",
    email: "",
    phoneNumber: this.phoneNumberValue,
    skill: "",
    state:"",
    city:"",
    type:"",
    gender:null,
    dateofbirth: null,
    highestqualification:"",
    previouscompany:"",
    //currentcompany:"",
    upload:""
  };
  public states: Array<string> = states;
  public citys: Array<string> = citys;
  public types: Array<string> = types;
  public userImages: Array<any>;
  public submitted = false;
  public myRestrictions: FileRestrictions = {
    allowedExtensions: ['pdf']
  };
  constructor(private formBuilder: FormBuilder,private service:UpladresumeService,private router:Router,private http:HttpClient) { 
    
  }
 
  
  ngOnInit(): void {
    this.form = new FormGroup({
      candidatename: new FormControl(this.data.fullName, [Validators.required]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(this.data.phoneNumber, [
        Validators.required,
      ]),
      skill: new FormControl(this.data.comments),
      state: new FormControl(this.data.state, [Validators.required]),
      city: new FormControl(this.data.city, [Validators.required]),
      type: new FormControl(this.data.type, [Validators.required]),
      gender: new FormControl(this.data.gender, [Validators.required]),
      dateofbirth: new FormControl(this.data.dateofbirth, [
        Validators.required,
      ]),
      highestqualification: new FormControl(this.data.highestqualification, [Validators.required]),
      previouscompany: new FormControl(this.data.previouscompany, [Validators.required]),
      //currentcompany: new FormControl(this.data.currentcompany, [Validators.required]),
      upload: new FormControl(this.data.upload, [Validators.required])
    });
    
  }
  fileToUpload:any;
  // public submitForm(): void {
    
  //   //console.log(this.form.value);
  // }
  randomString(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
  handleFileInput(e:any)
  {

    this.fileToUpload=e?.target?.files[0];
  }
  //public value: Date = new Date();

         
  public onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
       
      return this.form.markAllAsTouched();
    }
    var companyusername=window.sessionStorage.getItem("username");
    var resumeid=this.randomString(10);
    var companydata={
      resume_id:resumeid,
      company_username:companyusername,
      candidatename:this.form.value.candidatename,
      email:this.form.value.email,
      phoneNumber:this.form.value.phoneNumber,
      skill:this.form.value.skill,
      state:this.form.value.state,
      city:this.form.value.city,
      type:this.form.value.type,
      gender:this.form.value.gender,
      highestqualification:this.form.value.highestqualification,
      previouscompany: this.form.value.previouscompany,
      dateofbirth:this.form.value.dateofbirth,
      upload:this.form.value.upload,
      dob:this.form.value.dateofbirth
    }
    console.log(companydata);
    this.service.upload(companydata)
    .subscribe(res=>{
      if(res.toString())
      {
       // console.log(companydata);
        console.log("ok");
        this.router.navigate(['/dashboard']);
      }
      
   });

}

  public clearForm(): void {
    this.submitted = false;
    this.form.reset();
  }
  
}

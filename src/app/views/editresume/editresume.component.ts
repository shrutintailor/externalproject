import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl,FormBuilder } from "@angular/forms";
import { Product } from "./model";
import {states,citys,types} from './data';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import {Router,ActivatedRoute } from '@angular/router';
import { RegisterService } from '../../../app/shared/service/register.service';

@Component({
  selector: 'app-editresume',
  templateUrl: './editresume.component.html',
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
export class EditresumeComponent implements OnInit {
  uploadSaveUrl = 'saveUrl' // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API 
  public phoneNumberValue: string = "";
  public phoneNumberMask: string = "(999) 000-00-00";
  public form: FormGroup;
  public data: any = {
    candidatename: "",
    email: "",
    phoneNumber: this.phoneNumberValue,
    skill: "",
    state:"",
    city:"",
    gender:null,
    dateofbirth: null,
    highestqualification:"",
    previouscompany:""
  };
  public states: Array<string> = states;
  public citys: Array<string> = citys;
  public userImages: Array<any>;
  public submitted = false;
  public myRestrictions: FileRestrictions = {
    allowedExtensions: ['pdf']
  };
  resumeid:number=0;
  mode:string='';

  constructor(private service:RegisterService,private formBuilder: FormBuilder,private router:Router,private activateRoute:ActivatedRoute) { 
    this.activateRoute.queryParamMap.subscribe(param=>{
      this.resumeid=+param.get('resumeid')||0;
      this.mode=param.get('mode')||'';    
    })
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
      gender: new FormControl(this.data.gender, [Validators.required]),
      dateofbirth: new FormControl(this.data.dateofbirth, [
        Validators.required,
      ]),
      highestqualification: new FormControl(this.data.highestqualification, [Validators.required]),
      previouscompany: new FormControl(this.data.previouscompany, [Validators.required])
    });
    if(this.resumeid>0 && this.resumeid!=null)
   {
     this.getAllResumeDetails();
   }
  }

  public onSubmit() {
    this.submitted = true;
    var companydata={
      candidatename:this.data.candidatename,
      email:this.data.email,
      phoneNumber:this.data.phoneNumber,
      skill:this.data.skill,
      state:this.data.state,
      city:this.data.city,
      gender:this.data.gender,
      highestqualification:this.data.highestqualification,
      previouscompany: this.data.previouscompany,
      dateofbirth:this.data.dateofbirth
    };
    console.log(companydata);
   

    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
getAllResumeDetails()
{
  this.service.resumebyid(this.resumeid).subscribe(data=>{
    if(data.toString())
    {
      debugger;
      console.log("resumedetails:="+data);
    }
    this.form.patchValue({
      candidatename:data[0].candidatename,
      email:data[0].email,
      phoneNumber:data[0].contactno,
      state:data[0].state,
      city:data[0].city,
      gender:data[0].gender,
      skill:data[0].skill,
      highestqualification:data[0].highestqualification,
      previouscompany:data[0].previouscompany,
    });
  });
}
public clearForm(): void {
  this.submitted = false;
  this.form.reset();
}
}

import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { Company } from '../../Company';
import { RegisterService } from '../../../app/shared/service/register.service';
import {states,citys,types} from './data';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
import { NotificationService } from "@progress/kendo-angular-notification";
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styles: [
    `
    .example {
        display: flex;
        justify-content: center;
    }
    .wrap {
        display: flex;
        justify-content: space-between;
    }
    .wrap .arrival-date {
        width: 90%;
        margin-right: 18px;
    }
    .k-form {
        width: 400px;
    }
    `,
  ],
})
export class RegisterComponent implements OnInit{
  public phoneNumberValue: string = "";
  public phoneNumberMask: string = "(999) 000-00-00-00";

 // public form: FormGroup|any;
 public form: FormGroup|any;
 public submitted = false;
 public states: Array<string> = states;
 public citys: Array<string> = citys;
 public types: Array<string> = types;
 public data: any = {
   companyname: "",
   type:"",
   email: "",
   address:"",
   username:"",
   password:"",
   confirmpassword:"",
   contactno:"",
   state:"",
   city:"",
   website:"",
   linkdin:"",
   glassdoor:""
 };
  // constructor(private service:RegisterService,private fb : FormBuilder) 
  // { 
  //   /*this.form = new FormGroup({
  //     companyname: new FormControl(this.data.companyname, [Validators.required]),
  //     type: new FormControl(this.data.type, [Validators.required]),
  //     address: new FormControl(this.data.address, [Validators.required]),
  //     username: new FormControl(this.data.username, [Validators.required]),
  //     password: new FormControl(this.data.password, [Validators.required]),
  //     contactno: new FormControl(this.data.contactno, [Validators.required]),
  //     email: new FormControl(this.data.email, [
  //       Validators.required, 
  //       Validators.email,
  //     ]),
  //   });*/

 // }
  constructor(private service:RegisterService,private router:Router,private notificationService: NotificationService) 
  { 

  }
  ngOnInit(): void {
    //this.CreateForm();
    this.form = new FormGroup({
      //companyname: ['', Validators.required],
      companyname: new FormControl(this.data.companyname, [Validators.required]),
      type: new FormControl(this.data.type, [Validators.required]),
      address: new FormControl(this.data.address, [Validators.required]),
      username: new FormControl(this.data.username, [Validators.required]),
      password: new FormControl(this.data.password, [Validators.required]),
      confirmpassword: new FormControl(this.data.confirmpassword, [Validators.required]),
      contactno: new FormControl(this.data.contactno, [Validators.required]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      state: new FormControl(this.data.state, [
        Validators.required
      ]),
      city: new FormControl(this.data.city, [
        Validators.required
      ]),
      website: new FormControl(this.data.website, [Validators.required]),
      linkdin: new FormControl(this.data.linkdin, [Validators.required]),
      glassdoor: new FormControl(this.data.glassdoor, [Validators.required]),
    });
  }


  public onSubmit()
  {
    this.submitted = true;
    if (this.form.invalid) {
       
      return this.form.markAllAsTouched();
    }
    var companydata={
      CompanyUsername:this.data.username,
      CompanyName:this.data.companyname,
      Address:this.data.address,
      Email:this.data.email,
      Contactno:this.data.contactno,
      Type:this.data.type,
      Password:this.data.password,
      State:this.data.state,
      City:this.data.city,
      Website:this.data.website,
      Linkdin:this.data.linkdin,
      Glassdoor:this.data.glassdoor,
      Points:0,
      Status:0,
      Role:"company"
    };
    console.log(companydata);
   
    let pass=this.form.value.password;
    let cnfpass=this.form.value.confirmpassword;
    //let oldpas=this.form.value.oldpassword;
    if(pass!=cnfpass)
    {
      alert("password are not same");
    }
    else
    {
      this.service.insertcompany(companydata).subscribe(res=>{
    
        if(res.toString())
        {
          console.log(companydata);
          console.log("ok");
          this.router.navigate(['/login']);
          this.notificationService.show({
            content: "successFull Register Admin Will Approve Your Company If all Data Is Valid",
            cssClass: "button-notification",
            hideAfter: 600,
            animation: { type: "slide", duration: 4 },
            position: { horizontal: "center", vertical: "top" },
            type: { style: "success", icon: true },
            closable: true,
          });
        }
      });
    }
  
    

  }
   

    public clearForm(): void {
      this.submitted = false;
      this.form.reset();
    }
}

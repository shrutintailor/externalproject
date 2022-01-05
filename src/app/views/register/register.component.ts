import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from "@angular/forms";
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { Company } from '../../Company';
import { RegisterService } from '../../../app/shared/service/register.service';
import {states,citys,types} from './data';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
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
  constructor(private service:RegisterService,private router:Router) 
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

// CreateForm()
// {
//   this.form = this.fb.group({
//     /*companyname: new FormControl(this.data.companyname, [Validators.required]),
//       type: new FormControl(this.data.type, [Validators.required]),
//       address: new FormControl(this.data.address, [Validators.required]),
//       username: new FormControl(this.data.username, [Validators.required]),
//       password: new FormControl(this.data.password, [Validators.required]),
//       contactno: new FormControl(this.data.contactno, [Validators.required]),
//       email: new FormControl(this.data.email, [
//         Validators.required,
//         Validators.email,
//       ]),*/

//       companyname : ['',[Validators.required]],
//       type : ['',[Validators.required]],
//       address : ['',[Validators.required]],
//       username : ['',[Validators.required]],
//       password : ['',[Validators.required]],
//       contactno : ['',[Validators.required]],
//       email : ['',[Validators.required]],
//   })
// }
/*submitForm()
{
  if(this.form.valid)
  {
  this.service.addCompany(this.form.value)
  .subscribe(data => {
    debugger;
    if(data['data'])
    {
      alert("Success");
    }
    else{
      alert("Failed");
    }
  })
}
else{
  alert("Failed");
}
}*/
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
   
      this.service.insertcompany(companydata).subscribe(res=>{
        // alert(res.toString());
        //this.refreshDepList();
        if(res.toString())
        {
          console.log("ok");
          this.router.navigate(['/login']);
        }
      });
    }

    public clearForm(): void {
      this.submitted = false;
      this.form.reset();
    }
}

import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, } from "@angular/forms";
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { RegisterService } from '../../../app/shared/service/register.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
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
  ]
})
export class ResetpasswordComponent implements OnInit {
  public form: FormGroup|any;
  public submitted = false;
  public data: any = {
    newpassword: "",
    cnfpassword:""
  };
  constructor(private service:RegisterService,private router:Router) {
    
  }

  ngOnInit(): void {
   //this.CreateForm();
   this.form = new FormGroup({
     //companyname: ['', Validators.required],
     newpassword: new FormControl(this.data.newpassword, [
       Validators.required
     ]),
     cnfpassword: new FormControl(this.data.cnfpassword, [
      Validators.required
    ])
   });
 }
 public onSubmit()
 {
   //debugger;
  
   this.submitted = true;
  // this.form.markAllAsTouched();
    if (this.form.invalid) {
      
      return this.form.markAllAsTouched();
    }
    var getsession=window.sessionStorage.getItem("email");
     var companydata={
       Password:this.data.newpassword,
       Email:getsession
     };
     
   console.log(companydata+""+getsession);
   this.service.updatepassword(companydata).subscribe(res=>{
      if(res.toString())
      {
        console.log("Data updated");
        window.sessionStorage.clear();
        this.router.navigate(['/login']);
      }else
      {
        console.log("Data not updated");
      }
   });
 }

 public clearForm(): void {
   this.submitted = false;
   this.form.reset();
 }
}

import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder, } from "@angular/forms";
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
import { RegisterService } from '../../../app/shared/service/register.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
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
export class ForgotpasswordComponent implements OnInit {
  public form: FormGroup|any;
  public submitted = false;
  public data: any = {
    email: "",
  };
  constructor(private service:RegisterService,private router:Router) {
    
   }

   ngOnInit(): void {
    //this.CreateForm();
    this.form = new FormGroup({
      //companyname: ['', Validators.required],
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
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
     else
     {
        var companydata={
          Email:this.data.email,
        };
        console.log(companydata);
        this.service.displaycompanybyid(companydata).subscribe(res=>{
          //alert(res.toString());
          if(res.toString())
          {
            var setEmailSession=window.sessionStorage.setItem("email",companydata.Email);
            console.log("ok");
            this.router.navigate(['/resetpassword']);
          }
          else
          {
            console.log("not ok");
          }
        });
     }
      
  }

  public clearForm(): void {
    this.submitted = false;
    this.form.reset();
  }
}

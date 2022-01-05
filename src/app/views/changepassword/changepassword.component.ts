import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RegisterService } from '../../../app/shared/service/register.service';
import { TextBoxComponent } from "@progress/kendo-angular-inputs";
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  constructor(private service:RegisterService) { }
  public getsession:any;
  ngOnInit(): void {
    this.getsession = window.sessionStorage.getItem("username");
    console.log(this.getsession);
  }
  @ViewChild("password") public textbox: TextBoxComponent;
  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }
  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public form: FormGroup = new FormGroup({
    oldpassword: new FormControl(),
    password: new FormControl(),
    cnfpassword: new FormControl(),
  });
  
  public submit(): void {
    
    var companydata={
      Email:this.getsession,
      //oldpass:this.form.value.oldpassword,
      Password:this.form.value.password
    };
    let pass=this.form.value.password;
    let cnfpass=this.form.value.cnfpassword;
    let oldpas=this.form.value.oldpassword;
    if(pass!=cnfpass)
    {
      alert("password are not same");
    }
    else
    {
      console.log(companydata);
      console.warn("same");
      this.service.updatepassword(companydata).subscribe(res=>{
        if(res.toString())
        {
          alert(res.toString());
        }
      });
    }
  }

  public clearForm(): void {
    this.form.reset();
  }

  

}

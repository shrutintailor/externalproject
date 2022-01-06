import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 

  public form1 : FormGroup | any;
  public submited=false;
  public data1: any = {
   
    email: "",
    password: "",
   
  }
  constructor(private service: LoginService, private router: Router){
    this.form1 = new FormGroup({
      email: new FormControl(this.data1.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.data1.password, [
        Validators.required,
      ]),
    });}
    add()
  {
    this.submited=true;
    if(this.form1.invalid)
    {
      return this.form1.markAllAsTouched();
    }
    var val={Email:this.data1.email,Password:this.data1.password};
     console.log(val);
     
     //var getsession = window.sessionStorage.getItem("username");
     //console.log(getsession);
     
     this.service.loginid(val).subscribe(res=>{
      debugger;
      console.log(res.role)
      if(res.role=="company")
      {
        
        console.log("ok");
        var setsession = window.sessionStorage.setItem("username",this.data1.email);
        var setsession1=window.sessionStorage.setItem("role",res.role);
        
          this.router.navigate(['/companydashboard']);  
        
      }
      else if(res.role=="admin")
      {
        console.log("ok");
        var setsession = window.sessionStorage.setItem("username",this.data1.email);
        var setsession1=window.sessionStorage.setItem("role",res.role);
        this.router.navigate(['/dashboard']);
      }
      else
      {
        console.log("not ok");
      }
    });
     //onsole.log(this.data1.username)
    // console.log(this.form)
    // var val={};
    // this.service.loginid(this.data).subscribe(res=>{
    //   alert(res.toString());});
    // this.refreshDepList();
  }
  ngOnInit(): void {
    
  }
}

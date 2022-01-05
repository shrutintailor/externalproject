import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { RegisterService } from '../../../app/shared/service/register.service';
import {states,citys,types} from './data';
import {Router,ActivatedRoute } from '@angular/router';
import { DragAndDropAssetService } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  //styleUrls: ['./editcompany.component.scss']
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
    `
  ]
})
export class EditcompanyComponent implements OnInit {
  
  public phoneNumberValue: string = "";
  public phoneNumberMask: string = "(999) 000-00-00";
  public form: FormGroup;
  //public updateData: any;
  public submitted = false;
  public states: Array<string> = states;
 public citys: Array<string> = citys;
 public types: Array<string> = types;
 companyid:number=0;
 mode:string='';
  public data: any = {
    companyname: "",
   type:"",
   email: "",
   address:"",
   contactno:"",
   state:"",
   city:"",
   website:"",
   linkdin:"",
   glassdoor:""
  };
  public emaildata:any={
    email:""
  };
  public getsession:any;

  constructor(private service:RegisterService,private router:Router,private activateRoute:ActivatedRoute) { 
    this.activateRoute.queryParamMap.subscribe(param =>{
      this.companyid=+param.get('id')||0;
      this.mode=param.get('mode')||'';
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      //companyname: ['', Validators.required],
      companyname: new FormControl(this.data.companyname, [Validators.required]),
      type: new FormControl(this.data.type, [Validators.required]),
      address: new FormControl(this.data.address, [Validators.required]),
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
    // this.getsession = window.sessionStorage.getItem("username");
    // console.log(this.getsession);
    // this.emaildata.email=this.getsession;
    // this.service.getadmindata(this.emaildata).subscribe(data=>{
    //   console.log(data);
    //   this.updateData=data;
    // });
    if(this.companyid>0 && this.companyid!=null)
    {
      this.getCompanyDetailById();
    }
  }
  getCompanyDetailById()
  {
    
      this.service.companybyid(this.companyid).subscribe(data=>{
          if(data.toString())
          {
            debugger;
            console.log("getCompanyDetailById:="+data);
          }
          this.form.patchValue({
            companyname : data[0].companyName,
            email : data[0].email,
            type : data[0].type,
            contactno : data[0].contactno,
            address : data[0].address,
            state : data[0].state,
            city : data[0].city,
            website : data[0].website,
            linkdin : data[0].linkdin,
            glassdoor : data[0].glassdoor,
          });
      });
  }
  public onSubmit()
  {
    //debugger;
    this.submitted = true;
    if (this.form.invalid) {
       
      return this.form.markAllAsTouched();
    }
    var companydata={
      id:this.companyid,
      CompanyName:this.data.companyname,
      Address:this.data.address,
      Email:this.data.email,
      Contactno:this.data.contactno,
      Type:this.data.type,
      State:this.data.state,
      City:this.data.city,
      Website:this.data.website,
      Linkdin:this.data.linkdin,
      Glassdoor:this.data.glassdoor,
    };
    console.log(companydata);
    this.service.UpdateCompanyDetails(companydata).subscribe(res=>{
      // alert(res.toString());
      //this.refreshDepList();
      if(res.toString())
      {
        this.router.navigate(["/approvecompany"]);
      }
    });
    }

    public clearForm(): void {
      this.submitted = false;
      this.form.reset();
    }
}

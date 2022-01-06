import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../app/shared/service/register.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
import { NotificationService } from "@progress/kendo-angular-notification";
@Component({
  selector: 'app-approveresume',
  templateUrl: './approveresume.component.html',
  styleUrls: ['./approveresume.component.scss']
})
export class ApproveresumeComponent implements OnInit {
  public gridData: any[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
public usernamesession:any;
  public role:any;
  constructor(private service:RegisterService,private router:Router,private notificationService: NotificationService) { }
  public emaildata:any={
    email:""
  };
  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData(){
        this.service.displayapproveresume().subscribe(data=>{
        this.gridData=data;
      });
    
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
  public editHandler({dataItem})
  {
    const id=dataItem.resumeid;
    this.router.navigate(['/editresume'],{queryParams:{resumeid:id,mode:'edit'},queryParamsHandling:"merge"});
  }
  public rejectHandler({dataItem})
  {
    const id=dataItem.resumeid;
    this.router.navigate(['/editresume'],{queryParams:{resumeid:id,mode:'edit'},queryParamsHandling:"merge"});
  }
  public approveHandler(dataItem) {
  
    var resumedata={
      ResumeId:dataItem.resumeId
    }
    console.log(resumedata);
  this.service.updateapproveresume(resumedata).subscribe(res=>{
    debugger;
    if(res.toString())
    {
      console.log("Ok:-"+res.toString());
      this.router.navigate(['/viewresume']);
      this.notificationService.show({
        content: "Resume Appoved",
        hideAfter: 600,
        position: { horizontal: "center", vertical: "bottom" },
        animation: { type: "fade", duration: 1000 },
        type: { style: "success", icon: false },
      });
    }
    else
    {
      console.log("Data not found");
      this.notificationService.show({
        content: "Not Found",
        hideAfter: 600,
        position: { horizontal: "center", vertical: "bottom" },
        animation: { type: "fade", duration: 1000 },
        type: { style: "error", icon: false },
      });
    }
  });
}
  public removeHandler({dataItem}) {
    debugger
    var resumedata={
      ResumeId:dataItem.resumeId
    }
    console.log(resumedata);
    
    this.service.updaterejectresume(resumedata).subscribe(res=>{
      if(res.toString())
      {
        console.log("Ok:-"+res.toString());
        this.router.navigate(['/rejectedresume']);
        this.notificationService.show({
          content: "Resume Reject",
          hideAfter: 600,
          position: { horizontal: "center", vertical: "bottom" },
          animation: { type: "fade", duration: 1000 },
          type: { style: "success", icon: false },
        });
      }
      else
      {
        console.log("Data not found");
        this.notificationService.show({
          content: "Not Found",
          hideAfter: 600,
          position: { horizontal: "center", vertical: "bottom" },
          animation: { type: "fade", duration: 1000 },
          type: { style: "error", icon: false },
        });
      }
    });
    //this.editService.remove(dataItem);
  }
  add(dataitem)
  {  
    console.log(dataitem);
    
    var val1 = dataitem;
    //var x = "32";
    var val: number = +val1;
    debugger;
    console.log(val);
    this.service.getpdf(val).subscribe(data=>{
         debugger;
        //var val = (data) 
        console.log(data);
         //const blob= new Blob([data],{type:'application/pdf'});
         const url =window.URL.createObjectURL(data);
       window.open(url,'_blank');

      
  })
  }
}

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
  selector: 'app-approvecompany',
  templateUrl: './approvecompany.component.html',
  styleUrls: ['./approvecompany.component.scss']
})
export class ApprovecompanyComponent implements OnInit {
  public gridData: any[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
  constructor(private service:RegisterService,private router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData(){
    this.service.displayapprovecompany().subscribe(data=>{
      console.log(data);
      this.gridData=data;
    });
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
  public editHandler({dataItem})
  {
    const id=dataItem.id;
    this.router.navigate(['/editcompany'],{queryParams:{id:id,mode:'edit'},queryParamsHandling:"merge"});
  }
  public approveHandler(dataItem) {
      var companydata={
      id:dataItem.id,
      companyUsername:dataItem.companyUsername,
      companyName:dataItem.companyName,
      email:dataItem.email,
      type:dataItem.type,
      password:dataItem.password,
      status:dataItem.status,
      role:dataItem.role
    };
    this.service.updateapprovecompany(companydata).subscribe(res=>{
      if(res.toString())
      {
        console.log("Ok:-"+res.toString());
        this.router.navigate(['/viewresume']);
        this.notificationService.show({
          content: "Company Appoved",
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
    var companydata={
      id:dataItem.id,
      companyUsername:dataItem.companyUsername,
      companyName:dataItem.companyName,
      email:dataItem.email,
      type:dataItem.type,
      password:dataItem.password,
      status:dataItem.status,
      role:dataItem.role
    };
    console.log(companydata);
    this.service.updaterejectcompany(companydata).subscribe(res=>{
      if(res.toString())
      {
        console.log("Rejected:-"+res.toString());
        this.notificationService.show({
          content: "Company Rejected",
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
  public rejectHandler({dataItem})
  {
    const id=dataItem.resumeid;
    this.router.navigate(['/editresume'],{queryParams:{resumeid:id,mode:'edit'},queryParamsHandling:"merge"});
  }

}

import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../app/shared/service/register.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';

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
  constructor(private service:RegisterService,private router:Router) { }

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
  public removeHandler({dataItem}) {
    var companydata={
      resumeid:dataItem.resumeid,
      companyid:dataItem.companyid,
      candidatename:dataItem.candidatename,
      email:dataItem.email,
      phoneNumber:dataItem.phoneNumber,
      skill:dataItem.skill,
      state:dataItem.state,
      city:dataItem.city,
      type:dataItem.type,
      gender:dataItem.gender,
      highestqualification:dataItem.highestqualification,
      previouscompany:dataItem.previouscompany,
      currentcompany:dataItem.currentcompany,
      dateofbirth:dataItem.dateofbirth,
      upload:dataItem.upload,
    };
    console.log(companydata);
    
    this.service.updateapprove(companydata).subscribe(res=>{
      if(res.toString())
      {
        console.log("Ok:-"+res.toString());
      }
      else
      {
        console.log("Data not found");
      }
    });
    //this.editService.remove(dataItem);
  }
  
}

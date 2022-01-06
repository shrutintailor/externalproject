import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterService } from '../../../app/shared/service/register.service';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.scss']
})
export class ViewcompanyComponent implements OnInit {
  public gridData: any[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
  constructor(private service:RegisterService,private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData(){
    this.service.displaycompany().subscribe(data=>{
      this.gridData=data;
      console.log(data);
    });
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
  public editHandler(dataItem)
  {
    debugger;
    const id=dataItem.id;
    this.router.navigate(['/editcompany'],{queryParams:{id:id,mode:'edit'},queryParamsHandling:"merge"});
  }
  public deactiveHandler(dataItem)
  {
    debugger;
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
    // this.service.deactivecompany(companydata).subscribe(res=>{
    //   if(res.toString())
    //   {
    //     console.log("Rejected:-"+res.toString());
    //     this.router.navigate(['/viewresume']);
    //   }
    //   else
    //   {
    //     console.log("Data not found");
    //   }
    // });
  }
}
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../app/shared/service/register.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-rejectedresume',
  templateUrl: './rejectedresume.component.html',
  styleUrls: ['./rejectedresume.component.scss']
})
export class RejectedresumeComponent implements OnInit {
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
    this.service.displayrejectresume().subscribe(data=>{
      debugger;
      this.gridData=data;
    });
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
  add(dataitem)
  {  
    //console.log(dataitem);
    
    var val1 = dataitem;
    //var x = "32";
    var val: number = +val1;
    
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

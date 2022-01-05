import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterService } from '../../../app/shared/service/register.service';
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
  constructor(private service:RegisterService) { }

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

}

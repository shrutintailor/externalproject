import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../app/shared/service/register.service';
@Component({
  selector: 'app-companyreport',
  templateUrl: './companyreport.component.html',
  styleUrls: ['./companyreport.component.scss']
})
export class CompanyreportComponent implements OnInit {
  public gridData: any[];
  constructor(private service:RegisterService) { 
  }

  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData(){
    this.service.displaycompany().subscribe(data=>{
      console.log(data);
      this.gridData=data;
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyreportComponent } from './companyreport.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyreportComponent,
    data: {
      title: 'CompanyReport'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyreportRoutingModule { }

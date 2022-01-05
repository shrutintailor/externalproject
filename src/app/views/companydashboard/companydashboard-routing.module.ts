import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanydashboardComponent } from './companydashboard.component';
const routes: Routes = [
  {
    path:'',
    component:CompanydashboardComponent,
    data:{
      title:'CompanyDashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanydashboardRoutingModule { }

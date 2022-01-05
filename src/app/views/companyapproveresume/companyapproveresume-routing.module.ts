import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyapproveresumeComponent} from './companyapproveresume.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyapproveresumeComponent,
    data: {
      title: 'CompanyApproveResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyapproveresumeRoutingModule { }

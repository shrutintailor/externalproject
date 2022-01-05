import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApprovecompanyComponent } from './approvecompany.component' 
const routes: Routes = [
  {
    path: '',
    component: ApprovecompanyComponent,
    data: {
      title: 'ApproveResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovecompanyRoutingModule { }

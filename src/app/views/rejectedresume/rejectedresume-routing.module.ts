import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RejectedresumeComponent} from './rejectedresume.component'
const routes: Routes = [
  {
    path:'',
    component:RejectedresumeComponent,
    data:{
      title: 'RejectedResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedresumeRoutingModule { }

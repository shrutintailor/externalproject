import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApproveresumeComponent} from './approveresume.component';

const routes: Routes = [
  {
    path: '',
    component: ApproveresumeComponent,
    data: {
      title: 'UploadResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproveresumeRoutingModule { }

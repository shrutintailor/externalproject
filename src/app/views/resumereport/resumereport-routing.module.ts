import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumereportComponent } from './resumereport.component';

const routes: Routes = [
  {
    path: '',
    component: ResumereportComponent,
    data: {
      title: 'ResumeReport'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumereportRoutingModule { }

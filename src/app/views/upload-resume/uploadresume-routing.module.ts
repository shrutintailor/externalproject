import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadResumeComponent } from './upload-resume.component';

const routes: Routes = [
  {
    path: '',
    component: UploadResumeComponent,
    data: {
      title: 'UploadResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadresumeRoutingModule { }

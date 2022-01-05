import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewresumeComponent } from './viewresume.component';
const routes: Routes = [
  {
    path: '',
    component: ViewresumeComponent,
    data: {
      title: 'ViewResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewresumeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirecandidatesComponent } from './hirecandidates.component';
const routes: Routes = [
  {
    path: '',
    component: HirecandidatesComponent,
    data: {
      title: 'Hire Candidates'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirecandidatesRoutingModule { }

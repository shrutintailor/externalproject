import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword.component';

const routes: Routes = [
  {
    path: '',
    component: ChangepasswordComponent,
    data: {
      title: 'ChangePassword'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangepasswordRoutingModule { }

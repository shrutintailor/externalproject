import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpasswordComponent } from './resetpassword.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: ResetpasswordComponent,
  //   data: {
  //     title: 'ResetPassword'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpasswordRoutingModule { }

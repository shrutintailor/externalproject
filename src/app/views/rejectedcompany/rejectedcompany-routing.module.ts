import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RejectedcompanyComponent} from './rejectedcompany.component';
const routes: Routes = [
  {
    path:'',
    component:RejectedcompanyComponent,
    data:{
      title: 'RejectedCompany'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedcompanyRoutingModule { }

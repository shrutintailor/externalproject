import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcompanyComponent} from './viewcompany.component';
const routes: Routes = [
  {
    path: '',
    component: ViewcompanyComponent,
    data: {
      title: 'ViewResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcompanyRoutingModule { }

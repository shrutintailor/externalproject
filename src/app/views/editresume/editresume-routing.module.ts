import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditresumeComponent} from './editresume.component' 

const routes: Routes = [
  {
    path: '',
    component: EditresumeComponent,
    data: {
      title: 'EditResume'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditresumeRoutingModule { }

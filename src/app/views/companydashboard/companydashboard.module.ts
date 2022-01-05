import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CompanydashboardComponent } from './companydashboard.component'; 
import { CompanydashboardRoutingModule } from './companydashboard-routing.module';


@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CompanydashboardRoutingModule
  ],
  declarations: [CompanydashboardComponent]
})
export class CompanydashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterService}from '../../shared/service/register.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  providers:[RegisterService]
})
export class RegisterModule { }

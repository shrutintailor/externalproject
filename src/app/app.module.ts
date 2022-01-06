import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RegisterService } from '../app/shared/service/register.service';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent, UploadInterceptor } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { UploadResumeComponent } from './views/upload-resume/upload-resume.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule ,ExcelModule } from '@progress/kendo-angular-grid';
import { CompanyreportComponent } from './views/companyreport/companyreport.component';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ResumereportComponent } from './views/resumereport/resumereport.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ViewresumeComponent } from './views/viewresume/viewresume.component';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { ApproveresumeComponent } from './views/approveresume/approveresume.component';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { EditresumeComponent } from './views/editresume/editresume.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ApprovecompanyComponent } from './views/approvecompany/approvecompany.component';
import { ViewcompanyComponent } from './views/viewcompany/viewcompany.component';
import { EditcompanyComponent } from './views/editcompany/editcompany.component';
import { RejectedcompanyComponent } from './views/rejectedcompany/rejectedcompany.component';
import { RejectedresumeComponent } from './views/rejectedresume/rejectedresume.component';
//import { CompanydashboardComponent } from './views/companydashboard/companydashboard.component';
import { CompanyapproveresumeComponent } from './views/companyapproveresume/companyapproveresume.component';
import { HirecandidatesComponent } from './views/hirecandidates/hirecandidates.component';











@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    DateInputsModule,
    LabelModule,
    InputsModule,
    LayoutModule,
    ButtonsModule,
    HttpClientModule,
    GridModule,
    ExcelModule,
    DropDownsModule,
    UploadsModule,
    ExcelExportModule,
    DialogsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UploadResumeComponent,
    CompanyreportComponent,
    ChangepasswordComponent,
    ResumereportComponent,
    ProfileComponent,
    ViewresumeComponent,
    ForgotpasswordComponent,
    ApproveresumeComponent,
    ResetpasswordComponent,
    EditresumeComponent,
    ApprovecompanyComponent,
    ViewcompanyComponent,
    EditcompanyComponent,
    RejectedcompanyComponent,
    RejectedresumeComponent,
    CompanyapproveresumeComponent,
    HirecandidatesComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true,
    },
    RegisterService,
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { ForgotpasswordComponent } from './views/forgotpassword/forgotpassword.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';

export const routes: Routes = [
  {
    path: '',
    //When Browswer start first login page open
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: {
      title: 'ForgotPassword Page'
    }
    // children:[
    //   {
    //     path: 'resetpassword',
    //     loadChildren: () => import('./views/resetpassword/resetpassword.module').then(m =>m.ResetpasswordModule)
    //   },
      
    // ]
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
    data: {
      title: 'ResetPassword'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'companydashboard',
        loadChildren: () => import('./views/companydashboard/companydashboard.module').then(m => m.CompanydashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'upload-resume',
        loadChildren: () => import('./views/upload-resume/uploadresume.module').then(m =>m.UploadresumeModule)
      },
      {
        path: 'companyreport',
        loadChildren: () => import('./views/companyreport/companyreport.module').then(m =>m.CompanyreportModule)
      },
      {
        path: 'changepassword',
        loadChildren: () => import('./views/changepassword/changepassword.module').then(m =>m.ChangepasswordModule)
      },
      {
        path: 'resumereport',
        loadChildren: () => import('./views/resumereport/resumereport.module').then(m =>m.ResumereportModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m =>m.ProfileModule)
      },
      {
        path: 'viewresume',
        loadChildren: () => import('./views/viewresume/viewresume.module').then(m =>m.ViewresumeModule)
      },
      {
        path: 'approveresume',
        loadChildren: () => import('./views/approveresume/approveresume.module').then(m =>m.ApproveresumeModule)
      },
      {
        path: 'companyapproveresume',
        loadChildren: () => import('./views/companyapproveresume/companyapproveresume.module').then(m =>m.CompanyapproveresumeModule)
      },
      {
        path: 'rejectedresume',
        loadChildren: () => import('./views/rejectedresume/rejectedresume.module').then(m =>m.RejectedresumeModule)
      },
      {
        path: 'viewcompany',
        loadChildren: () => import('./views/viewcompany/viewcompany.module').then(m =>m.ViewcompanyModule)
      },
      {
        path: 'approvecompany',
        loadChildren: () => import('./views/approvecompany/approvecompany.module').then(m =>m.ApprovecompanyModule)
      },
      {
        path: 'rejectedcompany',
        loadChildren: () => import('./views/rejectedcompany/rejectedcompany.module').then(m =>m.RejectedcompanyModule)
      },
      {
        path: 'editresume',
        loadChildren: () => import('./views/editresume/editresume.module').then(m =>m.EditresumeModule)
      },
      {
        path: 'editcompany',
        loadChildren: () => import('./views/editcompany/editcompany.module').then(m =>m.EditcompanyModule)
      },
      {
        path: 'hirecandidates',
        loadChildren: () => import('./views/hirecandidates/hirecandidates.module').then(m =>m.HirecandidatesModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

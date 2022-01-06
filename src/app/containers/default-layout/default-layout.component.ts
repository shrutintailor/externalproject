import {Component,OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {cnavItems} from '../../_cnav';
import { Router } from '@angular/router';
import { NotificationService } from "@progress/kendo-angular-notification";
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems;
  //public cnavItems=cnavItems;
  public getsession:any;
  public role:any;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(private router:Router,private notificationService: NotificationService){}
  ngOnInit():void
  {
    this.getsession = window.sessionStorage.getItem("username");
    this.role = window.sessionStorage.getItem("role");
    if(this.role==="admin")
    {
        this.navItems=navItems;
    }
    else
    {
      this.navItems=cnavItems;
    }
    
    console.log(this.getsession);
  }
  logout()
  {
    window.sessionStorage.clear();
    console.log(this.getsession+""+this.role  );
    this.router.navigate(['/login']);
    this.notificationService.show({
      content: "Logout",
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 1000 },
      type: { style: "success", icon: false },
    });
  }
}

import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { VendorSidebarComponent } from '../vendor-sidebar/vendor-sidebar.component';
@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [NavBarComponent, VendorSidebarComponent],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css'
})
export class VendorDashboardComponent {

}

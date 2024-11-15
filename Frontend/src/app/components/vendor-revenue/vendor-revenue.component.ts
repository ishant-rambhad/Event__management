import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { VendorSidebarComponent } from "../vendor-sidebar/vendor-sidebar.component";

@Component({
  selector: 'app-vendor-revenue',
  standalone: true,
  imports: [NavBarComponent, VendorSidebarComponent],
  templateUrl: './vendor-revenue.component.html',
  styleUrl: './vendor-revenue.component.css'
})
export class VendorRevenueComponent {

}

import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { VendorSidebarComponent } from '../vendor-sidebar/vendor-sidebar.component';
@Component({
  selector: 'app-vendor-bookings',
  standalone: true,
  imports: [NavBarComponent, VendorSidebarComponent],
  templateUrl: './vendor-bookings.component.html',
  styleUrl: './vendor-bookings.component.css'
})
export class VendorBookingsComponent {

}

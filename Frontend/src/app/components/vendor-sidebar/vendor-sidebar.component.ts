import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vendor-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './vendor-sidebar.component.html',
  styleUrl: './vendor-sidebar.component.css'
})
export class VendorSidebarComponent {

  constructor(private router: Router) {}

}

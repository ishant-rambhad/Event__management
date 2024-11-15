import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { VendorNavbarComponent } from "../vendor-navbar/vendor-navbar.component";

@Component({
  selector: 'app-photographers',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, VendorNavbarComponent],
  templateUrl: './photographers.component.html',
  styleUrl: './photographers.component.css'
})
export class PhotographersComponent {
  constructor(private router: Router) {}
}

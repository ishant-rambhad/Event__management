import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-astrologer',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './astrologer.component.html',
  styleUrl: './astrologer.component.css'
})
export class AstrologerComponent {
  constructor(private router: Router) {}
}

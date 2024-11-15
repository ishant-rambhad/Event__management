import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-lighting',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './lighting.component.html',
  styleUrl: './lighting.component.css'
})
export class LightingComponent {
  constructor(private router: Router) {}
}

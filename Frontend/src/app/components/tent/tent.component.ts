import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-tent',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './tent.component.html',
  styleUrl: './tent.component.css'
})
export class TentComponent {
  constructor(private router: Router) {}
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-dance',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.css'
})
export class DanceComponent {
  constructor(private router: Router) {}

}

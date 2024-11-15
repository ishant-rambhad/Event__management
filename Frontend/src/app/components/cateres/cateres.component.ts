import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-cateres',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent],
  templateUrl: './cateres.component.html',
  styleUrl: './cateres.component.css'
})
export class CateresComponent {
  constructor(private router: Router) {}
}

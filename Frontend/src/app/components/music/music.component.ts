import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-music',
  standalone: true,
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent]

})
export class MusicComponent {
  constructor(private router: Router) {}

}

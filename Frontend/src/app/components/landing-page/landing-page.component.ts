import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-landing-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  @ViewChild('customCardContainer') customCardContainer!: ElementRef;

  scrollLeft() {
    const container = this.customCardContainer.nativeElement;
    container.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const container = this.customCardContainer.nativeElement;
    container.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
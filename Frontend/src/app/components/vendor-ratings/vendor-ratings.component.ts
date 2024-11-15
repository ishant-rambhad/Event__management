import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { VendorSidebarComponent } from '../vendor-sidebar/vendor-sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vendor-ratings',
  standalone: true,
  imports: [NavBarComponent, VendorSidebarComponent,CommonModule],
  templateUrl: './vendor-ratings.component.html',
  styleUrl: './vendor-ratings.component.css'
})
export class VendorRatingsComponent {

  reviews = [
    { client: 'Sneha Patel', rating: 4.8, comment: 'Fantastic DJ service! Great selection of music and atmosphere.', angle: this.calculateAngle(4.8) },
    { client: 'Neha Kumar', rating: 4.2, comment: 'Loved the lighting decor. Made the event look magical.', angle: this.calculateAngle(4.2) },
    { client: 'Vishal Singh', rating: 4.5, comment: 'Beautiful floral arrangements, very happy with the service.', angle: this.calculateAngle(4.5) },
    { client: 'Simran Joshi', rating: 5.0, comment: 'Photographer was excellent! Highly recommend.', angle: this.calculateAngle(5.0) },
    { client: 'Arjun Desai', rating: 3.9, comment: 'Good dance performance, but could have more variety in dances.', angle: this.calculateAngle(3.9) },
    { client: 'Priya Mehta', rating: 4.8, comment: 'Wedding was perfect, thanks to the dedicated planning team.', angle: this.calculateAngle(4.8) },
    { client: 'Sameer Bhatia', rating: 4.2, comment: 'Well-organized tent setup, everything was in place on time.', angle: this.calculateAngle(4.2) },
    { client: 'Anjali Rao', rating: 4.6, comment: 'Catering service was exceptional, everyone loved the food.', angle: this.calculateAngle(4.6) },
    { client: 'Karan Kapoor', rating: 4.8, comment: 'DJ created a great vibe, perfect for New Year celebrations!', angle: this.calculateAngle(4.8) },
    { client: 'Swati Agarwal', rating: 4.1, comment: 'Balloons were beautiful, but could use more color variety.', angle: this.calculateAngle(4.1) }
  ];

  // Method to calculate the angle based on the rating (3.0 to 5.0 maps to 180° to 306°)
  calculateAngle(rating: number): number {
    return 180 + ((rating - 3) / 2) * 126;
  }
}

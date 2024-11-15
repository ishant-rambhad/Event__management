import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LoadingComponent } from "./components/loading/loading.component"; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
isLoading: any;

 
  ngOnInit(): void {
    // Initialize AOS with custom options
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    AOS.init({
      duration:1500,         // Animation duration in milliseconds
      easing: 'ease-in-out',  // Easing function for the animation
      once: true,             // If true, the animation will only happen once when scrolled into view
      mirror: true,           // If true, the animation will be applied when the element is scrolled out and back into view
      offset: 200,            // The offset (in pixels) for when the animation should start (default is 0)
      delay: 100,             // Delay in milliseconds before the animation starts
    });
}

}
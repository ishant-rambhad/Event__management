import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { VendorBookingsComponent } from './components/vendor-bookings/vendor-bookings.component';
import { VendorRevenueComponent } from './components/vendor-revenue/vendor-revenue.component';
import { VendorRatingsComponent } from './components/vendor-ratings/vendor-ratings.component';
import { PhotographersComponent } from './components/photographers/photographers.component';
import { MusicComponent } from './components/music/music.component';
import { CateresComponent } from './components/cateres/cateres.component';
import { DanceComponent } from './components/dance/dance.component';
import { BalloonComponent } from './components/balloon/balloon.component';
import { AstrologerComponent } from './components/astrologer/astrologer.component';
import { TentComponent } from './components/tent/tent.component';
import { LightingComponent } from './components/lighting/lighting.component';
import { RoshanPhotoComponent } from './components/roshan-photo/roshan-photo.component';
import { DjsonuComponent } from './components/djsonu/djsonu.component';
import { KingComponent } from './components/king/king.component';
import { DanceRegaloComponent } from './components/dance-regalo/dance-regalo.component';
import { NarendraComponent } from './components/narendra/narendra.component';
import { GadgeAstrologerComponent } from './components/gadge-astrologer/gadge-astrologer.component';
import { TentBhagatComponent } from './components/tent-bhagat/tent-bhagat.component';
import { RushadLightingComponent } from './components/rushad-lighting/rushad-lighting.component';
import { ServicePageComponent } from './components/add-service/add-service.component';
import { VendorNavbarComponent } from './components/vendor-navbar/vendor-navbar.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
// import { ServiceListComponent } from './components/service-list/service-list.component';
import { AddCartComponent } from './components/add-cart/add-cart.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Default route should be first
    { path: 'Customer-login', component: CustomerLoginComponent },
    { path: 'Vendor-login', component: VendorLoginComponent },
    { path: 'Customer-registration', component: CustomerRegistrationComponent },
    { path: 'Vendor-registration', component: VendorRegistrationComponent },
    { path: 'service-data', component: AddToCartComponent },
    { path: 'vendor-navbar', component: VendorNavbarComponent },
    { path: 'Vendor-bookings', component: VendorBookingsComponent },
    { path: 'Vendor-revenue', component: VendorRevenueComponent },
    { path: 'Vendor-ratings', component: VendorRatingsComponent },
    { path: 'photographers', component: PhotographersComponent },
    { path: 'music', component: MusicComponent },
    { path: 'cateres', component: CateresComponent },
    { path: 'dance', component: DanceComponent },
    { path: 'balloon', component: BalloonComponent },
    { path: 'astrologer', component: AstrologerComponent },
    { path: 'tent', component: TentComponent },
    { path: 'lighting', component: LightingComponent },
    { path: 'roshan-photo', component: RoshanPhotoComponent },
    { path: 'djsonu', component: DjsonuComponent },
    { path: 'king', component: KingComponent },
    { path: 'dance-regalo', component: DanceRegaloComponent },
    { path: 'narendra', component: NarendraComponent },
    { path: 'gadge-astrologer', component: GadgeAstrologerComponent },
    { path: 'tent-bhagat', component: TentBhagatComponent },
    { path: 'rushad-lighting', component: RushadLightingComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'Vendor-dashboard', component: VendorDashboardComponent },
    { path: 'add-service', component: ServicePageComponent }, // Route for add service page
    // { path: "service-data", component: ServiceListComponent },
    { path: "add-cart", component: AddCartComponent }

    // Add other routes below as necessary
    // { path: 'Customer-dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

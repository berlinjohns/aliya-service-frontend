import { Component } from '@angular/core';
import { HeroComponent } from './pages/home/hero/hero.component';
import { ModalComponent } from './common/components/modal/modal.component';
import { OurServicesComponent } from './pages/home/our-services/our-services.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { WhyUsComponent } from './pages/home/why-us/why-us.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  
  imports: [
    HeroComponent,
    ModalComponent,
    OurServicesComponent,
    NavbarComponent,
    TestimonialsComponent,
    WhyUsComponent,
    FooterComponent,
    RouterOutlet
  ],
})
export class AppComponent {
  title = 'aliyaservice';
}

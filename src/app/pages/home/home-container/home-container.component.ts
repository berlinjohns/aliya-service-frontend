import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/common/components/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aliya-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  standalone: true,
  imports:[CommonModule,NavbarComponent,HeroComponent,OurServicesComponent,WhyUsComponent,TestimonialsComponent]
})
export class HomeContainerComponent {

}

import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from 'src/app/common/components/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'aliya-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  standalone: true,
  imports:[NavbarComponent,HeroComponent,OurServicesComponent,WhyUsComponent,TestimonialsComponent],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements AfterViewInit {
  private readonly menuService =inject(MenuService);
 
  ngAfterViewInit(): void {
    const section=this.menuService.homeScrollSection
    if(section){
      document.getElementById(section)?.scrollIntoView();
      console.log("triggered")
    }
    
  }

}

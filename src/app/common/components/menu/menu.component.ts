import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aliya-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports:[RouterLink]
})
export class MenuComponent {
   toService():void{
    document.getElementById("services")?.scrollIntoView();
   }

   toTestimonials():void{
    document.getElementById("testimonials")?.scrollIntoView();
   }

   toContactUs():void{
    document.getElementById("footer")?.scrollIntoView();
   }

   toWhyUs():void{
    document.getElementById("whyus")?.scrollIntoView();
   }
}

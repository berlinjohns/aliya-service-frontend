import {  ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'aliya-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent  {
  
  
   ngOnInit(): void {
    
   }
  
   
}

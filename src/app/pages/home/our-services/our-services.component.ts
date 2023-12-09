import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'aliya-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  
  AC: string[] = [
    'AC Repair',
    'AC Installation',
    'AC Maintenance',
    'AC Replacement',
    'Ventilation System Repair',
    'Ventilation System Installation',
    'Ventilation System Maintenance',
  ];

  Fridge: string[] = [
    'Fridge Repair',
    'Fridge Installation',
    'Fridge Maintenance',
    'Fridge Replacement',
    'Seasonal Check-ups',
    'Cleaning and Inspections',
  ];

  ac$ = of(this.AC);
  fridge$ = of(this.Fridge);

}

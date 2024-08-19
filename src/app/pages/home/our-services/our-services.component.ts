import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  AsyncPipe, NgFor } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'aliya-our-services',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
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

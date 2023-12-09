import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'aliya-proudct-card',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './proudct-card.component.html',
  styleUrls: ['./proudct-card.component.scss']
})
export class ProudctCardComponent {
    
}

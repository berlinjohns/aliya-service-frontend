import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'aliya-proudct-list',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './proudct-list.component.html',
  styleUrls: ['./proudct-list.component.scss'],
})
export class ProductListComponent implements OnInit {
   ngOnInit(): void {
    
   }
}

import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Product } from 'src/app/core/models/product.types';
import { Router } from '@angular/router';

@Component({
  selector: 'aliya-proudct-card',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './proudct-card.component.html',
  styleUrls: ['./proudct-card.component.scss']
})
export class ProudctCardComponent {

    router=inject(Router);
    @Input()
    product!:Product;

    navigateToDetail(_id:string){
        this.router.navigate(['/products/details',_id])
    }
}

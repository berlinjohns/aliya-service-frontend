import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Product } from 'src/app/core/models/product.types';
import { Router } from '@angular/router';

@Component({
  selector: 'aliya-product-card',
  standalone: true,
  imports: [CommonModule,ButtonComponent,NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

    router=inject(Router);
    @Input()
    product!:Product;

    navigateToDetail(_id:string){
        this.router.navigate(['/products/details',_id])
    }
}

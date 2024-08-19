import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from 'src/app/core/models/product.types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'aliya-product-card',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

    router=inject(Router);
    @Input()
    product!:Product;

    navigateToDetail(_id:string){
        this.router.navigate(['/products/details',_id])
    }
}

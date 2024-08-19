import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/models/product.types';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProductCardComponent } from '../product-card/product-card.component';
import { MenuService } from 'src/app/core/services/menu/menu.service';
@Component({
  selector: 'aliya-product-list',
  standalone: true,
  imports: [NgFor,NgIf,ButtonComponent,ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[],
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class ProductListComponent implements OnInit {
   
   products:Product[]=[];
   router:Router=inject(Router);
   private menuService:MenuService=inject(MenuService);
   destroyRef:DestroyRef=inject(DestroyRef);
   isLoading=signal<boolean>(true);
   constructor(private productService:ProductService){

   }
   ngOnInit(): void {
     this.getAllProducts()
     this.menuService.isSideBarShowing.set(false);
     this.menuService.enableBodyScrolling()
    
   }

   getAllProducts(){
     this.productService.getAllProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:(data) =>{this.products=data},
      error:(error)=>{this.router.navigate(["error"]),console.log(error)},
      complete:()=>this.isLoading.set(false)
     });
   }

   trackByFn(index: number, item: any): number {
    return index;
  }
  
   
   
}

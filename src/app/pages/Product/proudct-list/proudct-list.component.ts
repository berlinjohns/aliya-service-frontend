import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import {  HttpClientModule } from '@angular/common/http';
import { Product } from 'src/app/core/models/product.types';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProudctCardComponent } from '../proudct-card/proudct-card.component';
@Component({
  selector: 'aliya-proudct-list',
  standalone: true,
  imports: [CommonModule,ButtonComponent,HttpClientModule,ProudctCardComponent,NgFor],
  templateUrl: './proudct-list.component.html',
  styleUrls: ['./proudct-list.component.scss'],
  providers:[ProductService]
  
})
export class ProductListComponent implements OnInit {

   products:Product[]=[];
   router:Router=inject(Router);
   destroyRef:DestroyRef=inject(DestroyRef);
   isLoading=signal<boolean>(true);
   constructor(private productService:ProductService){

   }
   ngOnInit(): void {
     this.getAllProducts()
   }

   getAllProducts(){
     this.productService.getAllProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:(data) =>{this.products=data},
      error:(error)=>{this.router.navigateByUrl("error"),console.log(error)},
      complete:()=>this.isLoading.set(false)
     });
   }

   
   
}

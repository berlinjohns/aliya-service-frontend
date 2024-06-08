import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from 'src/app/core/models/product.types';

@Component({
  selector: 'aliya-product-details',
  standalone: true,
  imports: [CommonModule,ButtonComponent,NgOptimizedImage],
  providers:[ProductService],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private route=inject(ActivatedRoute);
  private router:Router=inject(Router);
  private destroyRef:DestroyRef=inject(DestroyRef);
   isLoading=signal<boolean>(true);
   productService=inject(ProductService);
   id!: string;
   product!:Product;

   ngOnInit():void{
      this.route.params.subscribe(params=>{
        this.id=params["_id"];
      })
      this.getProductDetailsById(this.id);
     

   }

   getProductDetailsById(id:string){
      this.productService.getProductDetailById(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next:(data:Product) =>{this.product=data},
        error:(error:any)=>{this.router.navigateByUrl("error")},
        complete:()=>this.isLoading.set(false)
       });
     }
   }




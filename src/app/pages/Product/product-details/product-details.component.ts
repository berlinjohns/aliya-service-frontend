import { ChangeDetectionStrategy, Component, DestroyRef, OnInit,inject, signal } from '@angular/core';
import {  CurrencyPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product } from 'src/app/core/models/product.types';

@Component({
  selector: 'aliya-product-details',
  standalone: true,
  imports: [NgFor,NgIf,CurrencyPipe,ButtonComponent,NgOptimizedImage],
  providers:[],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  private route=inject(ActivatedRoute);
  private router:Router=inject(Router);
  private destroyRef:DestroyRef=inject(DestroyRef);
   isLoading=signal<boolean>(true);
  private readonly productService=inject(ProductService);
   id!: string;
   product!:Product;

   ngOnInit():void{
      this.route.params.subscribe(params=>{
        this.id=params["_id"];
      })
      this.getProductDetailsById(this.id);
     

   }

   trackByFn(index: number, item: any): number {
    return index;
  }
  
  

   getProductDetailsById(id:string){
      this.productService.getProductDetailById(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next:(data:Product) =>{this.product=data},
        error:(error:any)=>{this.router.navigateByUrl("error")},
        complete:()=>this.isLoading.set(false)
       });
     }
   }




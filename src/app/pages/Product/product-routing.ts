
import { Route } from "@angular/router";
import { ProductListComponent } from "./proudct-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";



export const productRoute: Route[] = [
    {
    title:'Aliya | Products List',
    path: '',
    component:ProductListComponent
}, {
    title:'Aliya | Product Details',
    path: 'details/:_id',
    component:ProductDetailsComponent
    // loadComponent:()=>import('./product-details/product-details.component').then((m)=>m.ProductDetailsComponent),
    }
]
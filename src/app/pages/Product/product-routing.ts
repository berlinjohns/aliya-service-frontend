
import { Route } from "@angular/router";
import { ProductListComponent } from "./proudct-list/proudct-list.component";



export const productRoute: Route[] = [
    {
    title:'Aliya | Products List',
    path: '',
    component:ProductListComponent
}, {
    title:'Aliya | Product Details',
    path: 'details',
    loadComponent:()=>import('./product-details/product-details.component').then((m)=>m.ProductDetailsComponent),
    }
]
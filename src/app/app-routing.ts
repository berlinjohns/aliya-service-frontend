
import {  Route } from '@angular/router';
import { HomeContainerComponent } from './pages/home/home-container/home-container.component';
import { ProductListComponent } from './pages/Product/proudct-list/proudct-list.component';
import { productRoute } from './pages/Product/product-routing';
export const APP_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeContainerComponent
  },{
    
    path: 'products',
    loadChildren:()=>import('./pages/Product/product-routing').then((m)=>m.productRoute)
  }
];



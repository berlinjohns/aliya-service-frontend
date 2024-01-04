
import {  Route } from '@angular/router';
import { HomeContainerComponent } from './pages/home/home-container/home-container.component';
import { Error404PageComponent } from './common/components/error404-page/error404-page.component';
export const APP_ROUTE: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component:HomeContainerComponent
  },{
    
    path: 'products',
    loadChildren:()=>import('./pages/Product/product-routing').then((m)=>m.productRoute)
  },
  
  {
    path:'error',
    loadComponent:()=>import('./common/components/error500-page/error500-page.component').then((m)=>m.Error500PageComponent)
  },
  {
    path:'**',
    loadComponent:()=>import('./common/components/error404-page/error404-page.component').then((m)=>m.Error404PageComponent)
  }
];



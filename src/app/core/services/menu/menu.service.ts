import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isSideBarShowing=signal(false);
  homeScrollSection!:string;

  
  
  disableBodyScrolling() {
    document.body.style.setProperty('overflow','hidden')
  }

  enableBodyScrolling() { 
    document.body.style.setProperty('overflow','scroll')
  }
}

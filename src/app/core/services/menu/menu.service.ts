import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isSideBarShowing=signal(false);

  
  
  disableBodyScrolling() {
    document.body.style.setProperty('overflow','hidden')
  }

  enableBodyScrolling() { 
    document.body.style.setProperty('overflow','scroll')
  }
}

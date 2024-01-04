import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'aliya-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CommonModule, MenuComponent, ButtonComponent,RouterLink]
})
export class NavbarComponent {
  isMenuScrolled: boolean = false;
  isSideBarShowing: boolean = false;
  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100) this.isMenuScrolled = true;
    else this.isMenuScrolled = false;

   
  }

  disableBodyScrolling() {
    document.body.style.setProperty('overflow','hidden')
  }

  enableBodyScrolling() { 
    document.body.style.setProperty('overflow','scroll')
  }

  openSideBar(): void {
    this.isSideBarShowing = true;
    this.disableBodyScrolling();
  }

  closeSideBar(): void {
    this.isSideBarShowing = false;
    this.enableBodyScrolling();
  }
}

import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { RouterLink } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
    selector: 'aliya-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CommonModule, MenuComponent, ButtonComponent,RouterLink]
})
export class NavbarComponent {
  
  menuService:MenuService=inject(MenuService)
  isMenuScrolled: boolean = false;
  isSideBarShowing=this.menuService.isSideBarShowing;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100) this.isMenuScrolled = true;
    else this.isMenuScrolled = false;

   
  }

  
  openSideBar(): void {
    document.getElementById("hero")?.scrollIntoView();
    this.menuService.isSideBarShowing.set(true);
    this.menuService.disableBodyScrolling();
  }

  closeSideBar(): void {
    this.menuService.isSideBarShowing.set(false);
    this.menuService.enableBodyScrolling();
  }
}

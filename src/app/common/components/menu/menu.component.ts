import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'aliya-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports:[RouterLink],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
   menuService = inject(MenuService);
   router=inject(Router);

   

   navigateTo(section:string){
    document.getElementById(section)?.scrollIntoView();
    this.menuService.isSideBarShowing.set(false);
    this.router.navigateByUrl('');
    this.menuService.enableBodyScrolling();
   }
}

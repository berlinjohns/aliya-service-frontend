import { Component } from '@angular/core';
import { ModalComponent } from 'src/app/common/components/modal/modal.component';
import { NavbarComponent } from 'src/app/common/components/navbar/navbar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'aliya-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports:[NavbarComponent,ButtonComponent,ModalComponent]

})
export class HeroComponent {
  canShowModal: boolean = false;
  
}

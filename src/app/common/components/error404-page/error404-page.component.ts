import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'aliya-error404-page',
  standalone: true,
  imports: [],
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
 
export class Error404PageComponent {
  location=inject(Location);

  goBack():void{
    this.location.back();
  }
}

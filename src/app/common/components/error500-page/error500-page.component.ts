import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'aliya-error500-page',
  standalone: true,
  imports: [],
  templateUrl: './error500-page.component.html',
  styleUrls: ['./error500-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Error500PageComponent {
 private location=inject(Location);

  goBack():void{
    this.location.back();
  }
}

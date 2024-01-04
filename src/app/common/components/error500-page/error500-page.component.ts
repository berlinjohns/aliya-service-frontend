import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'aliya-error500-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error500-page.component.html',
  styleUrls: ['./error500-page.component.scss']
})
export class Error500PageComponent {
  location=inject(Location);

  goBack():void{
    this.location.back();
  }
}

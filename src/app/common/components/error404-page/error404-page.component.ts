import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'aliya-error404-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error404-page.component.html',
  styleUrls: ['./error404-page.component.scss']
})
 
export class Error404PageComponent {
  location=inject(Location);

  goBack():void{
    this.location.back();
  }
}

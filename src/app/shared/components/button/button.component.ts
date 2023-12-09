import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aliya-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports:[NgIf]
})
export class ButtonComponent {
  @Input()size: string = 'L'//S,M,L
  @Input()shade: string = 'W';//D,L,W,NA
  @Input() animation: string = 'C';//CIRCLE,FADE
  @Input() name: string = "";
}

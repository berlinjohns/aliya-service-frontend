import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';


@Component({
  selector: 'aliya-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports:[NgIf,ReactiveFormsModule,ButtonComponent,NgClass]
})
export class ModalComponent implements OnInit,OnChanges {
 
 
  submitted: boolean = false;
  @Input() show: boolean = false;
  @Output() onClose = new EventEmitter()
  

  disableBodyScrolling() {
    document.body.style.setProperty('overflow','hidden')
  }

  enableBodyScrolling() { 
    document.body.style.setProperty('overflow','scroll')
  }

  ngOnInit(): void {
    this.init();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  init():void{
    if (this.show)
    this.disableBodyScrolling();
  }

  requestForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phoneNumber: new FormControl(null,[Validators.required]),
    appliance: new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required)
  })



  onSubmit() {
    this.submitted = true;
    if (this.requestForm.valid) {
      console.log(this.requestForm.value)
    }
  }

  modalClose(): void {
    this.enableBodyScrolling();
    this.onClose.emit();
  }
  
 
}

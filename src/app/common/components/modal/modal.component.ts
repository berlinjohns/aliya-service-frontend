import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Appliance } from 'src/app/core/models/serviceRequest';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NgZone } from '@angular/core';

@Component({
  selector: 'aliya-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports:[NgIf,ReactiveFormsModule,ButtonComponent,NgClass,],
  providers:[],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit,OnChanges {
  productService=inject(ProductService);
  ngZone=inject(NgZone);
 
 
  submitted: boolean = false;
  @Input() show: boolean = false;
  @Output() onClose = new EventEmitter()
  loadingStatus=signal<string>('FALSE');
  

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
    this.loadingStatus.set("TRUE")
    const request={
            name:this.requestForm.value.name || '',
            email:this.requestForm.value.email || '',
            phoneNumber:this.requestForm.value.phoneNumber || '',
            appliance:this.requestForm.value.appliance  || "Ac" as Appliance,
            address:this.requestForm.value.address || '',
          };
       this.productService.createServiceRequest(request).subscribe(
        {
          next:()=>this.loadingStatus.set("SUCCESS"),
          error:()=>{
            this.loadingStatus.set("ERROR")
            this.submitted=false;
            this.resetForm()
          },
          complete:()=>{
           
            this.resetForm()
            console.log("process completed")
        },



        }
       )
    }
  }

  modalClose(): void {
    this.requestForm.reset();
    this.enableBodyScrolling();
    this.onClose.emit();
  }

  resetForm(): void {
    this.ngZone.run(() => {
      setTimeout(() => {
        this.loadingStatus.set("FALSE");
        this.modalClose();
      }, 3000);
    });
  }
  
 
}

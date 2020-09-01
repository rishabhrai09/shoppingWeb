import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'app-alert',
    templateUrl:'./alertBox.component.html',
    styleUrls:['./alertBox.component.css']
})

export class AlertComponent {
   @Input() message:string
   @Output() close = new EventEmitter<void> ();


   onClose(){
       this.close.emit()
   }
}
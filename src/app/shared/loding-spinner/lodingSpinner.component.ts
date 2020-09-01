import {Component, OnInit} from '@angular/core';

@Component({
    selector:'app-loding',
    template:'<div class="lds-hourglass"></div>',
    styleUrls:['./lodingSpinner.component.css']
})

export class LodingSpinner implements OnInit{
    constructor(){

    }
    ngOnInit(){}
}
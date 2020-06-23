import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';

import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService:ShoppingListService) { }
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;
 @Output() ingridentAdded=new EventEmitter<Ingrediant>();
  ngOnInit() {
  }

  onAddItem(){
const ingName=this.nameInputRef.nativeElement.value;
const ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient= new Ingrediant(ingName,ingAmount)
this.slService.onAddedIngrediant(newIngredient)
  }
}

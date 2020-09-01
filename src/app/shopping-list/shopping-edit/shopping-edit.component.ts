import { Component, OnInit,EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';

import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{

  subscriptions:Subscription;
  editMode=false;
  editindexItem:number;
  editItem:Ingrediant;
  constructor(private slService:ShoppingListService) { }
@ViewChild('f') slForm:NgForm
 @Output() ingridentAdded=new EventEmitter<Ingrediant>();
  ngOnInit() {
  this.subscriptions  =this.slService.startedEditing.subscribe(
    (index:number)=>{
   this.editindexItem=index;
   this.editMode=true;
this.editItem=this.slService.getIngrediant(index)
this.slForm.setValue({
  name:this.editItem.name,
  amount:this.editItem.amount
})
    }
  )
  }

  onAddItem(form:NgForm){
const value=form.value
const newIngredient= new Ingrediant(value.name,value.amount)
if(this.editMode){
  this.slService.updateIngrdiant(this.editindexItem,newIngredient)
}
else{
this.slService.onAddedIngrediant(newIngredient)
  
}
this.editMode=false;
form.reset()


  }
  onDelete(){
    this.onClear()
    this.slService.deleteIngrediant(this.editindexItem)
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false;
  }
  
 ngOnDestroy(){
   this.subscriptions.unsubscribe()
 }
}

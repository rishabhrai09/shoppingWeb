import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingrediantChanged=new EventEmitter<Ingrediant[]>();
  constructor() { }
 private ingrediants:Ingrediant[]=[
    new Ingrediant('Mango',5),
    new Ingrediant('banana',4)
  ]



  getingrediants(){
    return this.ingrediants.slice()
  }
  onAddedIngrediant(ingrediant:Ingrediant){
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.emit(this.ingrediants.slice())
  }
  addIngrediants(ingrediants:Ingrediant[]){
    this.ingrediants.push(...ingrediants);
    this.ingrediantChanged.emit(this.ingrediants.slice())
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingrediantChanged= new Subject<Ingrediant[]>();
 startedEditing=new Subject<number>()
  constructor() { }
 private ingrediants:Ingrediant[]=[
    new Ingrediant('Mango',5),
    new Ingrediant('banana',4)
  ]


getIngrediant(index:number){
  return this.ingrediants[index]
}
  getingrediants(){
    return this.ingrediants.slice()
  }
  onAddedIngrediant(ingrediant:Ingrediant){
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.next(this.ingrediants.slice())
  }
  addIngrediants(ingrediants:Ingrediant[]){
    this.ingrediants.push(...ingrediants);
    this.ingrediantChanged.next(this.ingrediants.slice())
  }
  updateIngrdiant(index:number,newIngrediant:Ingrediant){
    this.ingrediants[index]=newIngrediant
    this.ingrediantChanged.next(this.ingrediants.slice())
  }
  deleteIngrediant(index:number){
this.ingrediants.splice(index,1);
this.ingrediantChanged.next(this.ingrediants.slice())
  }
}

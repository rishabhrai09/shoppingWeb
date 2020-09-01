import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Subject } from 'rxjs/internal/Subject';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
udpdateChanges= new Subject<Recipe[]>()
//  private recipes:Recipe[]=[
//     new Recipe("The recipe","the new Recipe is good",
//     "https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg",[
//       new Ingrediant('Meat',1)
//     ]),
//     new Recipe(" The another recipe","the new Recipe is good",
//     "https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg",[
//       new Ingrediant('meat',20),
//       new Ingrediant('french Fries',20),

//     ])
//   ]
 private recipes:Recipe[]=[]
  constructor(private slService:ShoppingListService) { }
  getRecipes(){
  return  this.recipes.slice()
  }
  getRecipe(index:number){
return this.recipes[index]
  }

  addIngrediantToShoppinglist(ingrediants:Ingrediant[]){
 this.slService.addIngrediants(ingrediants)
  }
  setRecipes(recipes:Recipe[]){
    this.recipes=recipes
    this.udpdateChanges.next(this.recipes.slice())

  }
  addRecipes(recipe:Recipe){
  this.recipes.push(recipe) 
  this.udpdateChanges.next(this.recipes.slice())

  }
  updateRecipes(index:number,newRecipe:Recipe ){
this.recipes[index]=newRecipe
this.udpdateChanges.next(this.recipes.slice())

  }
  DeleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.udpdateChanges.next(this.recipes.slice())

  }
}

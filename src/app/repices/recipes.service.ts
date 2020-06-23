import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
recipeSelected=new EventEmitter<Recipe>()

 private recipes:Recipe[]=[
    new Recipe("The recipe","the new Recipe is good",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg",[
      new Ingrediant('Meat',1)
    ]),
    new Recipe(" The another recipe","the new Recipe is good",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg",[
      new Ingrediant('meat',20),
      new Ingrediant('french Fries',20),

    ])
  ]
  constructor(private slService:ShoppingListService) { }
  getRecipes(){
  return  this.recipes.slice()
  }

  addIngrediantToShoppinglist(ingrediants:Ingrediant[]){
 this.slService.addIngrediants(ingrediants)
  }
}

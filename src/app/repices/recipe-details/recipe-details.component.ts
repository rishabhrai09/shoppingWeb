import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe:Recipe
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
  }
  onAddToShoppinglist(){
this.recipeService.addIngrediantToShoppinglist(this.recipe.ingrediants)
  }

}

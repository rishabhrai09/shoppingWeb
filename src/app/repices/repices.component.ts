import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-repices',
  templateUrl: './repices.component.html',
  styleUrls: ['./repices.component.css']
})
export class RepicesComponent implements OnInit {
SelectedRecipe:Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.SelectedRecipe=recipe;
      }
    )
  }

}

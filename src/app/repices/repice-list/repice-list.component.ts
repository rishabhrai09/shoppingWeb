import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-repice-list',
  templateUrl: './repice-list.component.html',
  styleUrls: ['./repice-list.component.css']
})
export class RepiceListComponent implements OnInit {
 recipes:Recipe[];
 
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes()
  }
 

}

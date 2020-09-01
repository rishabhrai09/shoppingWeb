import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe:Recipe
  id:number
  constructor(private recipeService:RecipesService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id)
      }
    )
  }
  onAddToShoppinglist(){
this.recipeService.addIngrediantToShoppinglist(this.recipe.ingrediants)
  }
  onEditRecipe(){

    //this.router.navigate(['edit'],{relativeTo:this.route})
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
  onDelete(){
    this.recipeService.DeleteRecipe(this.id)
    this.router.navigate(['../recipes'])
  }
}

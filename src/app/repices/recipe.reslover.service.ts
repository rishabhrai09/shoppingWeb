import {Injectable} from '@angular/core';
import { DataStorageService } from '../shared/dataStorage.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.modal';
import { RecipesService } from './recipes.service';
@Injectable({providedIn:'root'})
export class RecipeResloverService implements Resolve<Recipe[]> {
constructor(private dataService:DataStorageService,private recipeService:RecipesService){}
resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const recipes=this.recipeService.getRecipes()
    if(recipes.length===0){
        return this.dataService.fetchdata()

    }
    else{
        return recipes;
    }
}

}
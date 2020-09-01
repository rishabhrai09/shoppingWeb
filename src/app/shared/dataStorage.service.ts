import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipesService } from '../repices/recipes.service';
import { Recipe } from '../repices/recipe.modal';
import {map, tap, take,exhaustMap} from 'rxjs/operators'
import { AuthService } from '../auth/auth/auth.service';
@Injectable({providedIn:'root'})
export class DataStorageService {
    constructor(private http: HttpClient,private recipeservice:RecipesService,private authService:AuthService){}
    stroreRecipe(){
        const recipes= this.recipeservice.getRecipes()
        this.http.put('https://foodcart-66d24.firebaseio.com/recpies.json',recipes).subscribe(response=>{
            console.log(response)
        })
    }

    fetchdata(){
  
            return this.http.get<Recipe[]>('https://foodcart-66d24.firebaseio.com/recpies.json')
        .pipe(map(recipes=>{
            return recipes.map(recipe=>{
                return {...recipe,ingrediants:recipe.ingrediants?recipe.ingrediants:[]}
            })
        }),tap(recipe=>{
            this.recipeservice.setRecipes(recipe)
        }))
        
    }

}
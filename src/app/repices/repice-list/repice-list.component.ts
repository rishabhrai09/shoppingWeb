import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-repice-list',
  templateUrl: './repice-list.component.html',
  styleUrls: ['./repice-list.component.css']
})
export class RepiceListComponent implements OnInit,OnDestroy {
 recipes:Recipe[];
 subscription:Subscription
 
  constructor(private recipeService:RecipesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   this.subscription= this.recipeService.udpdateChanges.subscribe(
      (recipe:Recipe[])=>{
        this.recipes=recipe
      }
    )
    this.recipes=this.recipeService.getRecipes()
  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}

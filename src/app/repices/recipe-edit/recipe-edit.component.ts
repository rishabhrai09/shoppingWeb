import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode=false;
recipeForm:FormGroup; 
  constructor(private route:ActivatedRoute,private recipeService:RecipesService,private router:Router) { }

  ngOnInit() {
    
    this.route.params
    .subscribe(
    (params:Params)=>{
      this.id=+params['id']
      this.editMode=params['id'] != null;
      this.onInit()
        }
    )
  }
  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipes(this.id,this.recipeForm.value) 
    }
    else{(this.recipeService.addRecipes(this.recipeForm.value))
    }
    this.onCancle()
  }
  onAddIngrident(){
   (<FormArray>this.recipeForm.get('ingrediants')).push(
     new FormGroup({
       'name':new FormControl(null,Validators.required),
       'amount':new FormControl(null,[
         Validators.required,
         Validators.pattern(/^[0-9]+[1-9]*$/)
       ])
     })
   )
     }
     onCancle(){
       this.router.navigate(['../'],{relativeTo:this.route})
     }
     onDeleteIngrdiants(index:number){
       (<FormArray>this.recipeForm.get('ingrediants')).removeAt(index)
     }

  private onInit(){
  let recipeName='';
  let recipeImagePath='';
  let recipeDiscription=''
  let recipeIngrdiants=new FormArray([])
  if(this.editMode){
    let recipe =this.recipeService.getRecipe(this.id)
    recipeName=recipe.name;
    recipeImagePath=recipe.imagePath;
    recipeDiscription=recipe.description;
    if(recipe['ingrediants']){
      for(let ingrediant of recipe.ingrediants){
        recipeIngrdiants.push(
          new FormGroup({
            'name':new FormControl(ingrediant.name,Validators.required),
            'amount':new FormControl(ingrediant.amount,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
          })
        )
      }
    }


  }
  
this.recipeForm=new FormGroup({
'name':new FormControl(recipeName,Validators.required),
'imagePath':new FormControl(recipeImagePath,Validators.required),
'description':new FormControl(recipeDiscription,Validators.required),
'ingrediants':recipeIngrdiants
})
  }
  get controls() { 
    return (<FormArray>this.recipeForm.get('ingrediants')).controls;
  }
  
}

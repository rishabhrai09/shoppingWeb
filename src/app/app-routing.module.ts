import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Recipe } from './repices/recipe.modal';
import { RepicesComponent } from './repices/repices.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './repices/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './repices/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './repices/recipe-edit/recipe-edit.component';
import { RecipeResloverService } from './repices/recipe.reslover.service';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './auth/auth/authgaurd.component';

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'recipes',component:RepicesComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResloverService]},
    {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResloverService]}
  ]},
  {path:'shopping',component:ShoppingListComponent},{
    path:'auth',component:AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

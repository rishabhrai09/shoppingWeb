import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RepicesComponent } from './repices/repices.component';
import { RepiceListComponent } from './repices/repice-list/repice-list.component';
import { RecipeDetailsComponent } from './repices/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './repices/repice-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdwonDirective } from './shared/dropdwon.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './repices/recipes.service';
import { RecipeStartComponent } from './repices/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './repices/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LodingSpinner } from './shared/loding-spinner/lodingSpinner.component';
import { AuthInterceptor } from './auth/auth/auth.intercepter';
import { AuthService } from './auth/auth/auth.service';
import { AlertComponent } from './shared/alertBox/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepicesComponent,
    RepiceListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdwonDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LodingSpinner,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [ShoppingListService,RecipesService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

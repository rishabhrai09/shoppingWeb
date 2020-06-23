import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DropdwonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
   TooltipModule.forRoot(),
   ModalModule.forRoot()
  ],
  providers: [ShoppingListService,RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

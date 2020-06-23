import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingrediants:Ingrediant[]
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingrediants=this.slService.getingrediants();
    this.slService.ingrediantChanged.subscribe(
      (ingrediants:Ingrediant[])=>{
        this.ingrediants=ingrediants
      }
    )
  }

}

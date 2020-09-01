import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 ingrediants:Ingrediant[]
 private igChange:Subscription
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingrediants=this.slService.getingrediants();
    this.slService.ingrediantChanged.subscribe(
      (ingrediants:Ingrediant[])=>{
        this.ingrediants=ingrediants
      }
    )
  }
  ngOnDestroy():void{
    // this.igChange.unsubscribe()
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index)
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/dataStorage.service';
import { AuthService } from '../auth/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{

  constructor(private dataService:DataStorageService,private authService:AuthService) { }
 
  private userSub:Subscription
  isAuthenticated=false

  ngOnInit() {
 this.userSub=this.authService.user.subscribe(user=>{
this.isAuthenticated=!!user
console.log(!user)
console.log(!!user)
 })
  }

  onSaveData(){
this.dataService.stroreRecipe()
  }

  onFetchData(){
    this.dataService.fetchdata().subscribe()
  }
  ngOnDestroy(){
this.userSub.unsubscribe()
  }
  onLogout(){
    this.authService.logout()
  }
}

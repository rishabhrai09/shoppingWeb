import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){

  }
  ngOnInit(){

  }
  loadedFeature='recipe'
  onNavigate(feature:string){
this.loadedFeature=feature;
  }
  title = 'practice';
}

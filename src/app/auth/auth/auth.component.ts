import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthInterface } from './auth.service';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode=true;
isLoding=false;
error:string=null;
onSwitchMode(){
  this.isLoginMode=!this.isLoginMode
}
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    const email=form.value.email;
    const password= form.value.password;
    let authObs:Observable<AuthInterface>
   this.isLoding=true;
    if(!form.valid){
      return;
    }
    if(this.isLoginMode){
     authObs= this.authService.login(email,password)

    }else{
    
  authObs=  this.authService.singUp(email,password)
    }
    
    authObs.subscribe(resposeData=>{
      
      this.isLoding=false;
      console.log(resposeData)
      this.router.navigate(['/recipes'])
    },errorMesg=>{
      this.isLoding=false;
      this.error=errorMesg;
      console.log(errorMesg)
    }
    )  
  
    form.reset()
  }


  onhandleError(){
    this.error=null;
  }
}

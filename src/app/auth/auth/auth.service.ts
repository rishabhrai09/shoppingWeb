import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { LodingSpinner } from 'src/app/shared/loding-spinner/lodingSpinner.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
export interface AuthInterface{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}
@Injectable({providedIn:'root'})

export class AuthService  {
    user =new BehaviorSubject<User>(null)
    tokenExpirationtimer:any
    constructor(private http:HttpClient,private router:Router) {}
    singUp(email:string,password:string){
      return  this.http.post<AuthInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLIaTZhxGNz1ETT3CRSc8mlIEu9c_FUHQ',
        {
            email:email,
            password:password,
            returnSecureToken:true

        }).pipe(catchError(this.errorHandle ),tap(resData=>{
           this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
        }))
 
    }
    autoLogin(){
 const userData:{
     email:string,
     id:string,
     _token:string,
     _tokenExpirationDate:string
 }= JSON.parse( localStorage.getItem('userData'))
 if(!userData){
     return;
 }
 const loadedUser= new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

 if(loadedUser.token){
     this.user.next(loadedUser);
     const expirationDuration=new Date(userData._tokenExpirationDate).getTime()-new Date().getTime();
     this.autoLogout(expirationDuration )
 }
    }

    logout(){

        this.user.next(null)
        this.router.navigate(['/auth'])
        localStorage.removeItem('userData')
        if(this.tokenExpirationtimer){
            clearInterval(this.tokenExpirationtimer)
        }
        this.tokenExpirationtimer=null
    }
    autoLogout(expirationDuration:number){
        console.log(expirationDuration)
     this.tokenExpirationtimer=   setTimeout(()=>{
            this.logout()
        },expirationDuration)
    }
    login(email:string,password:string){
      return  this.http.post<AuthInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLIaTZhxGNz1ETT3CRSc8mlIEu9c_FUHQ', {
            email:email,
            password:password,
            returnSecureToken:true

        }).pipe(catchError(this.errorHandle),tap(resData=>{
            this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
         }))

    }
    private handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
        const expirationDate= new Date(new Date().getTime() + +expiresIn *1000)
        const user= new User(email,userId,token,expirationDate)
        this.user.next(user);
        this.autoLogout(expiresIn*1000)
        localStorage.setItem('userData',JSON.stringify(user))

    }
    private errorHandle(errRes:HttpErrorResponse){
        
            let errorMesg="An Unknown error occurrred";
            if(!errRes.error || !errRes.error.error ){
                return throwError(errorMesg);
            }
             switch(errRes.error.error.message){
            case "EMAIL_EXISTS":
                errorMesg="This Email already exits";
                break;
            case "EMAIL_NOT_FOUND":
                errorMesg=   " There is no user record corresponding to this identifier. The user may have been deleted."
              break;
                case "INVALID_PASSWORD":
                 errorMesg= "The password is invalid or the user does not have a password"
       break;
             }
           return  throwError(errorMesg)
         }
         
    }

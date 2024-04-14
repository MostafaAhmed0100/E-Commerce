import { HttpErrorResponse } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shard/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

msgErorr:string='';
isLoading:boolean=false;

  constructor(private _AuthService:AuthService  , private _Router:Router  , private _FormBuilder:FormBuilder ){}


logIn:FormGroup = this._FormBuilder.group({
  email:['' , [Validators.required , Validators.email]],
  password:[''  ,  [Validators.required  , Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)]],
})

  handleForm(){
    console.log(this.logIn.value);

    if(this.logIn.valid){
      this.isLoading=true;
      this._AuthService.setLogIn(this.logIn.value).subscribe({

        next:(response)=>{

          if(response.message == 'success'){
            this.isLoading=false;
             localStorage.setItem('eToken' , response.token);
             this._AuthService.savaUserData();

          this._Router.navigate(['/home']);

          }

        }

        ,
        error:(err:HttpErrorResponse)=>{
         this.msgErorr= err.error.message;
         this.isLoading=false;

        }
      })
    }
    else{
      this.logIn.markAllAsTouched();
    }


  }
}

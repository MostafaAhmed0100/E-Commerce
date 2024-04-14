import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shard/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  msgErorr:string='';
  isLoading:boolean=false;
  constructor(private _AuthService:AuthService , private _Router:Router  , private _FormBuilder:FormBuilder){}




registerNow:FormGroup = this._FormBuilder.group({
  name:[''  , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
  email:['' , [Validators.required , Validators.email]],
  password:['' , [Validators.required  ,  Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)] ],
  rePassword:[''],
  phone:['' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],

} , {validators:[this.confirmPassword]} as FormControlOptions   );




confirmPassword(group:FormGroup):void{

  let password = group.get('password');
  let rePassword = group.get('rePassword');
if(rePassword?.value == ''){

rePassword?.setErrors({required:true});
}

 else if(password?.value != rePassword?.value){
   rePassword?.setErrors({misMatch:true})

  }


}



handelForm():void{

console.log(this.registerNow.value);
if(this.registerNow.valid){
  this.isLoading =true;
  this._AuthService.setRegister(this.registerNow.value).subscribe({
    next:(response)=>{
    this.isLoading=false;

    console.log(response);

    if(response.message == 'success'){
     this._Router.navigate(['/login'])
    }

    },
    error:(err:HttpErrorResponse)=>{
    this.isLoading=false;
   this.msgErorr=  err.error.message;



    }
  })
}

else{

  this.registerNow.markAllAsTouched();

}


}
}

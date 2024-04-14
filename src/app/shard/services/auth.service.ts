
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



userData:any;

constructor(private _HttpClient:HttpClient  ,private _Router:Router){}

logOut():void{

localStorage.removeItem('eToken');


this._Router.navigate(['/login'])





}





savaUserData(){

 if(localStorage.getItem('eToken') !=null){

let encoded:any =  localStorage.getItem('eToken');

  let decode = jwtDecode(encoded);

  this.userData= decode;



  console.log(decode);


 }

}

setRegister(userData:object):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , userData)
}


setLogIn(userData:object):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`  , userData)
}


}







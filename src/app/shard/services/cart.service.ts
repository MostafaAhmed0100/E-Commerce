import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // tokenCard:any = {token:localStorage.getItem('eToken')};
  constructor(private _HttpClient:HttpClient){}

  // add product cart

postCard(productId:string):Observable<any>
  {


return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, {"productId": productId});

}


// get product cart
getUserCart():Observable <any>

{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` );
}



removeProductItem(productId:string):Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`

  )
}


updateProductCart(idProduct:string  ,  productCount:number):Observable<any>
{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProduct}`  ,
  {
    count:  productCount
  },


  )
}



checkOutCart(idCart:string  , userData:object):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=http://localhost:4200`,
  {

    shippingAddress :   userData
  },


  )
}




removeAllCart():Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart` )
}



chashOrder(idCash:string , cashForm:object):Observable<any>
{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${idCash}` ,

   {
    shippingAddress : cashForm
   },

  )
}


getAllOrders():Observable<any>
{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders`)
}
}

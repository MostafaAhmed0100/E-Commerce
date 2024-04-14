import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  myHeaders:any = {token:localStorage.getItem('eToken')};

  wishListNumber:BehaviorSubject<any> = new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) { }

  addProductWish(productId:string):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,


    {
      productId: productId
    },

  )
  }

  getProductWish():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`

    )
  }

  removeAllWish(wishId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${wishId}`)
  }
}

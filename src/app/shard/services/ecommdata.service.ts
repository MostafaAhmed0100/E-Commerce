import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommdataService {

  constructor(private _HttpClient:HttpClient) { }


  popularCategories():Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  getProductDetalis(id:string):Observable <any>
  {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  setProductData():Observable <any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }



  specificCategory(idCategr:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${idCategr}`)
  }


  getProductBrand():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }

  getSpecificBrand(brandId:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
  }


  getAllSubCate():Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/subcategories`)
  }

}

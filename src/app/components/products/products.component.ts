import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shard/interface/product';
import { CartService } from 'src/app/shard/services/cart.service';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';
import { WishlistService } from 'src/app/shard/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
myDate = new Date();
productsArr:Product[]=[];
removeWishArr:any[]=[]
constructor(
  private _EcommdataService:EcommdataService ,
  private _CartService:CartService ,
  private _WishlistService:WishlistService,
  private _ToastrService: ToastrService ){}

ngOnInit():void{
  this._EcommdataService.setProductData().subscribe({
    next:(response)=>{
    this.productsArr=response.data;

    },
    error:(err)=>{
      console.log(err);


    }
  })
}


addCart(id:string):void{
this._CartService.postCard(id).subscribe({
  next:(response)=>{
    console.log(response.data);

  },
  error:(err)=>{

    console.log(err);


  }
})
}

addWish(id:string):void{
  this._WishlistService.addProductWish(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message)

    },
    error:(err)=>{
      console.log(err);


    }
  })

}

removeWishList(id:string):void{
  this._WishlistService.removeAllWish(id).subscribe({
    next:(response)=>{
     this.removeWishArr= response.data;
     this._ToastrService.success(response.message)

    },
    error:(err)=>{
      console.log(err);

    }
  })
}

}

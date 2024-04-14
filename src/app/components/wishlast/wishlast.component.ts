 import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shard/interface/product';

import { CartService } from 'src/app/shard/services/cart.service';
import { WishlistService } from 'src/app/shard/services/wishlist.service';

@Component({
  selector: 'app-wishlast',
  templateUrl: './wishlast.component.html',
  styleUrls: ['./wishlast.component.css']
})
export class WishlastComponent implements OnInit{
   wishList:any[]= []
   productWich:any = {};
   removeWishArr:any[]=[];
   myDate = new Date();

  constructor(private _WishlistService:WishlistService , private _CartService:CartService){}

  ngOnInit(): void {
      this._WishlistService.getProductWish().subscribe({
        next:(response)=>{
          console.log(response.data);
          this.wishList = response.data;


        },
        error:(err)=>{
          console.log(err);

        }
      })
  }

  addProductWish(id:string):void{
    this._CartService.postCard(id).subscribe({
      next:(response)=>{

      // console.log(response);


      this.productWich =  response;


      }
    })
  }

  removeWishList(id:string):void{


    this._WishlistService.removeAllWish(id).subscribe({

      next:(response)=>{
       this.removeWishArr = response.data;


      },
      error:(err)=>{
          console.log(err);

      }
    })


    this._WishlistService.getProductWish().subscribe({
      next:(response)=>{
        this.wishList = response.data;
      },
      error:(err)=>{
        console.log(err);

      }
     })
  }

}

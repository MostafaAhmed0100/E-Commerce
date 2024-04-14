import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shard/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private _CartService:CartService){}


cartDetalis:any = null;



removeCartItem(id:string):void{


  this._CartService.removeProductItem(id).subscribe({
    next:(response)=>{
     console.log(response);


    this.cartDetalis= response.data;

    },

    error:(err)=>{
      console.log(err);

    }
  })



   }





 ngOnInit():void{
     this._CartService.getUserCart().subscribe({
      next:(response)=>{
       console.log(response.data);




       this.cartDetalis = response.data;


      },
      error:(err)=>{
         console.log(err);

      }
     })
 }



updateCart(productId:string , count:number):void{

this._CartService.updateProductCart(productId , count).subscribe({
  next:(response)=>{
    this.cartDetalis= response.data;

  },
  error:(err)=>{

   console.log(err);

  }
})

}


updateRemoveCart(idProduct:string , count:number):void{

  if(count > 0){


this._CartService.updateProductCart(idProduct , count).subscribe({


  next:(response)=>{

  this.cartDetalis =  response.data;


  },
  error:(err)=>{
    console.log(err);

  }


  })


  }

}




removeAll():void{
  this._CartService.removeAllCart().subscribe({
    next:(response)=>{
     console.log(response);

     this.cartDetalis=  response;


    },
    error:(err)=>{
      console.log(err);

    }
  })
}

}

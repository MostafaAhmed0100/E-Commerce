import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shard/services/cart.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit{
   cashId:any;
   productCash:any ;
   constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}
   ngOnInit():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
      this.cashId =  params.get('id');

     },
     error:(err)=>{
         console.log(err);

     }
    })
   }

  shoppingCash:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:[''],
  })

  handelForm():void{
    console.log(this.shoppingCash.value);
   this._CartService.chashOrder(this.cashId, this.shoppingCash.value).subscribe({
      next:(response)=>{


     if(response.status == "success"){
      this.productCash =  response.data;
     }




      },
      error:(err)=>{
           console.log(err);

      }
    })


  }


}

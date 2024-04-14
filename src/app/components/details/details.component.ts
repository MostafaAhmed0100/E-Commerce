import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shard/services/cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

idProduct:any ;
productDetails:any = {};

//  productDetails:Product = {} as Product;
  // categroiesDetails:Categr = {} as Categr;

  constructor(private _ActivatedRoute:ActivatedRoute   ,  private _EcommdataService:EcommdataService , private _CartService:CartService ){}

ngOnInit():void{
this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
    this. idProduct = params.get('id');
    this._EcommdataService.getProductDetalis(this.idProduct).subscribe({
      next:(response)=>{
        // console.log(response.data);

       this.productDetails =  response.data;

      }
    })
  }


})


}

addProductDetails(id:string):void{
  this._CartService.postCard(id).subscribe({
    next:(response)=>{

      console.log(response);


    },

    error:(err)=>{
        console.log(err);

    }
})

}


productSlider: OwlOptions= {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false,





}




}

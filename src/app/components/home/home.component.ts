import { Component, OnDestroy, OnInit} from '@angular/core';
import { Product } from 'src/app/shard/interface/product';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shard/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/shard/services/wishlist.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  , OnDestroy{
idUns:any;
termSearch:string='';
productHomeArr:Product[]=[];
sliderCategories:any[]=[]
wishArr:any[]=[]
wishCart:any = {}



constructor(private _EcommdataService:EcommdataService  ,  private _CartService:CartService , private _ToastrService:ToastrService , private _WishlistService:WishlistService){}
 public myDate = new Date();
 ngOnInit():void{

  // product
this.idUns=this._EcommdataService.setProductData().subscribe({
    next:(response)=>{


     this.productHomeArr= response.data;
    },

    error:(err)=>{
      console.log(err);

    }
  })

// Categories

this._EcommdataService.popularCategories().subscribe({
  next:(response)=>{
    this.sliderCategories =response.data;

  }
})

}


 categories: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
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
      items: 6
    }
  },
  nav: false
}



mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
  items:1,
  nav: false
}

ngOnDestroy():void{
this.idUns.unsubscribe();
 }


addCard(id:string):void{

 this._CartService.postCard(id).subscribe({
    next:(response)=>{
      // console.log(response);
       this._ToastrService.success('Product added successfully to your cart')


    },
    error:(err)=>{
      console.log(err);
    }
  })
}


addWishList(id:string):void{
this._WishlistService.addProductWish(id).subscribe({
  next:(response)=>{
    console.log(response);

    this._ToastrService.success('Product added successfully to your WishList');



  },
  error:(err)=>{
        console.log(err);

  }
})


this._CartService.postCard(id).subscribe({
  next:(response)=>{console.log(response);
    this.wishCart = response;
    this._WishlistService.wishListNumber.next(response.numOfCartItems)

  },
  error:(err)=>{console.log(err);
  }
})

}


removeWishList(id:string):void{
  this._WishlistService.removeAllWish(id).subscribe({
    next:(response)=>{
     console.log(response.data);

     this.wishArr = response.data

    this._ToastrService.warning('Product Remove successfully to your WishList')


    },
    error:(err)=>{
      console.log(err);

    }
  })
}

}














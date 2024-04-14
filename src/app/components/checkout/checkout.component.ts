import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shard/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

productId:any = '';
constructor(private _FormBuilder:FormBuilder  , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}
checkout:FormGroup = this._FormBuilder.group({
details:[''],
phone:[''],
city:['']
})

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
      this.productId=  param.get('id');

      }
    })
}

handleForm():void{

  console.log(this.checkout.value);
  this._CartService.checkOutCart(this.productId , this.checkout.value).subscribe({
    next:(response)=>{


      if(response.status == 'success'){
         window.open(response.session.url , '_self')
      }

    },
    error:(err)=>{
         console.log(err);

    }
  })


}

}

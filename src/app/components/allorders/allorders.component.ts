import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shard/services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{

allOrderArr:any[]=[]
cartItems:any []=[]
outerItem: any;

constructor(private _CartService:CartService){}

ngOnInit():void{
  this._CartService.getAllOrders().subscribe({
    next:(response)=>{
        console.log(response.data

        );

    this.allOrderArr =  response.data;


    },
    error:(err)=>{
        console.log(err);

    }
  })
}
}



import { Component, OnInit } from '@angular/core';
import { Brand, Product } from 'src/app/shard/interface/product';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';



@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
 productBrand: Brand[] =[];
  constructor(private _EcommdataService:EcommdataService){}

  ngOnInit():void{
    this._EcommdataService.getProductBrand().subscribe({
      next:(response)=>{
        console.log(response.data);


      this.productBrand =  response.data;


      },
      error:(err)=>{
        console.log(err);


      }
    })
  }

}




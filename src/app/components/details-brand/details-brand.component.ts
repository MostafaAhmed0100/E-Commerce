import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/shard/interface/product';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';


@Component({
  selector: 'app-details-brand',
  templateUrl: './details-brand.component.html',
  styleUrls: ['./details-brand.component.css']
})
export class DetailsBrandComponent implements OnInit{
  brandId:any = '';
  brandDetails:Brand = {} as Brand;
   constructor(private _ActivatedRoute:ActivatedRoute , private _EcommdataService:EcommdataService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
        this.brandId= params.get('id');

        this._EcommdataService.getSpecificBrand(this.brandId).subscribe({
          next:(response)=>{
             console.log(response.data);
             this.brandDetails = response.data;

          },

          error:(err)=>{
               console.log(err);

          }
        })

        },
        error:(err)=>{

          console.log(err);


        }
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categr } from 'src/app/shard/interface/categr';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';

@Component({
  selector: 'app-details-categr',
  templateUrl: './details-categr.component.html',
  styleUrls: ['./details-categr.component.css']
})
export class DetailsCategrComponent implements OnInit{
  categrId:any = '';
  productCategr:Categr = {} as Categr;
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcommdataService:EcommdataService){}

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
           this.categrId=  params.get('id');

           this._EcommdataService.specificCategory(this.categrId).subscribe({

            next:(response)=>{
              console.log(response.data);
              this.productCategr = response.data;

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

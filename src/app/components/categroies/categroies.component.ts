import { Component, OnInit } from '@angular/core';
import { Categr } from 'src/app/shard/interface/categr';
import { EcommdataService } from 'src/app/shard/services/ecommdata.service';

@Component({
  selector: 'app-categroies',
  templateUrl: './categroies.component.html',
  styleUrls: ['./categroies.component.css']
})
export class CategroiesComponent implements OnInit{
categriesArr:Categr[]=[]
constructor(private _EcommdataService:EcommdataService){}

ngOnInit():void{
this._EcommdataService.popularCategories().subscribe({
  next:(response)=>{
   console.log(response.data);

  this.categriesArr= response.data;


  },
  error:(err)=>{
    console.log(err);


  }
})
/*
this._EcommdataService.getAllSubCate().subscribe({

  next:(response)=>{

    console.log(response.data);


  },
  error:(err)=>{

    console.log(err);


  }
}) */




}

}

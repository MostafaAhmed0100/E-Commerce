import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shard/services/auth.service';
import { WishlistService } from 'src/app/shard/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{


wishNum = 0;
  constructor(private _AuthService:AuthService  , private _WishlistService:WishlistService){}

  ngOnInit(): void {
      this._WishlistService.wishListNumber.subscribe({
        next:(data)=>{

          this.wishNum = data

        }
      })
  }

  handleSignOut():void{
   this._AuthService.logOut();
  }

  // TypeScript


}



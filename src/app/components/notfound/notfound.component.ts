import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  myDate:any
 constructor(private _Router:Router){}
  navigateBack(){
   this._Router.navigate(['/home']);
  }

}
/*
@Pipe({
  name: 'textdate'
})
export class TextdatePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return '';

    const dateObj = new Date(value);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
  }

} */

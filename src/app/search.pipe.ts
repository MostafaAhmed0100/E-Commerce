import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './shard/interface/product';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[] , term:string):Product[] {
   return products.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase()))
  }

}

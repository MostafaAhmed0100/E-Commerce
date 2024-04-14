import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'textdate'
})
export class TextdatePipe implements PipeTransform {




    transform(value: any, format: string = 'medium'): any {
      if (!value || isNaN(value.getTime())) return 'Invalid Date';

      const datePipe: DatePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(value, format);

      const hour = value.getHours();
      const minute = value.getMinutes();
      const formattedTime = `${hour}:${minute}`;

      return `${formattedDate} ${formattedTime}`;
    }



}

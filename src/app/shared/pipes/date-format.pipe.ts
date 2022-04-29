import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    let tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
    let lovalISOTime = (new Date(Date.now() - tzoffset)).toISOString().replace('Z', '').replace('T', ' ');
    return lovalISOTime;
    //new Date().toISOString();
    //return null;
  }

}

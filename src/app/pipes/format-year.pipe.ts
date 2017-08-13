import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatYear'
})
export class FormatYearPipe implements PipeTransform {

  transform(value: any): string {
    return "'" + value.toString().substring(2);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

export class FilterTextBoxPipe implements PipeTransform {


  transform(value: any[], keys: string, term: string, maxItems: number): any {
    let numberOfElementsToBeReturned = 4;
    if (maxItems)
      numberOfElementsToBeReturned = maxItems;

    if (!term)
      return value.slice(0, numberOfElementsToBeReturned);

    let terms = term.split(' ');
    let newValue: any[] = (value || []).filter((item) => keys.split(',').some(key => {
      var result = true;
      if (item.hasOwnProperty(key)) {
        terms.forEach(element => {
          result = result && new RegExp(element, 'gi').test(item[key])
        });
      }
      return result;
    }));
    return newValue.slice(0, numberOfElementsToBeReturned);
  }
}

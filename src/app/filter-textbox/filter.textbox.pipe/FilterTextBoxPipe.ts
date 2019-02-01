import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

export class FilterTextBoxPipe implements PipeTransform {


  transform(value: any[], term: string, maxItems: number): any {
    let numberOfElementsToBeReturned = 4;
    // when the maximum number defined from the html, update it, otherwise the default is four
    if (maxItems)
      numberOfElementsToBeReturned = maxItems;

    // when no keywords defined return the first n elements
    if (!term || term.trim() == "")
      return value.slice(0, numberOfElementsToBeReturned);

    // set all search characters to lowercase and remove any special characters
    let terms = term.split(' ').map(item => item.toLowerCase().replace(/[^a-zA-Z ]/g, ""));

    for (var i = 0; i < value.length; i++) {
      // remove all HTML codes entered
      value[i].sentence = value[i].sentence.replace('<b>', '');
      value[i].sentence = value[i].sentence.replace('</b>', '');
      
    };

    let newValue: any[] = (value || []).filter((item) => {
      var result = true;
      terms.forEach(element => {
        item.sentence = item.sentence.replace('<b>', '');
        item.sentence = item.sentence.replace('</b>', '');
        result = result && new RegExp(element, 'gi').test(item.sentence)
      });
      return result;
    });

    // hilight the search term
    for (var i = 0; i < numberOfElementsToBeReturned; i++) {
      if (newValue[i]) {
        terms.forEach(subelement => {
          newValue[i].sentence = newValue[i].sentence.toLowerCase().replace(subelement, ("<b>" + subelement + "</b>"))
        });
      }
      else
        break;
    }
    return newValue.slice(0, numberOfElementsToBeReturned);
  }
}

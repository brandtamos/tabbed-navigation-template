import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTexts: string): any[] {
    if(!items) return [];
    if(!searchTexts) return items;
    searchTexts = searchTexts.toLowerCase();

    return items.filter( it => {
        return it.name.toLowerCase().includes(searchTexts);
    });
}

}

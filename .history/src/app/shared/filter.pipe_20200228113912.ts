import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTexts: string): any[] {
    if(!items) return [];
    if(!searchTexts) return []];
    searchTexts = searchTexts.toLowerCase();

    return items.filter( it => {
        console.log(it);
        return it.name.toLowerCase().includes(searchTexts);
    });

}

}

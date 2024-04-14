import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainExtractor'
})
export class DomainExtractorPipe implements PipeTransform {

  transform(value: string): string {
    try {
      const url = new URL(value);
      return url.hostname;
    } catch (e) {
      console.error('Invalid URL');
      return value; // Retorna el valor original en caso de error
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitToPipe'
})
export class LimitToPipePipe implements PipeTransform {
  transform(value: any[], limit: number): any[] {
    return value.slice(0, limit);
  }
}

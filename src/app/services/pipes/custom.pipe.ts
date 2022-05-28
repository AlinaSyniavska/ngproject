import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'done' : 'not done';
  }

}

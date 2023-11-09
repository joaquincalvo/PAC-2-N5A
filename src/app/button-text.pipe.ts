import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonText',
})
export class ButtonTextPipe implements PipeTransform {
  transform(showComments: boolean): string {
    return showComments ? 'Hide Comments' : 'Show Comments';
  }
}

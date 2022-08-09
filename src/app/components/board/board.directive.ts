import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoard]',
})
export class BoardDirective {
  constructor(private el: ElementRef) {}
}

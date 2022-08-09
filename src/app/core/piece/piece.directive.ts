import { Directive, ElementRef, Host } from '@angular/core';

@Directive({ selector: '[appPiece]' })
export class AppPieceDirective {
  constructor(private el: ElementRef) {
    console.log('host', this.el);
  }
}

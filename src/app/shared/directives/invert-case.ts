import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInvertCase]',
})
export class InvertCase {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);

  currentChar: string = '';
  char = this.element.nativeElement;
  yellow = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-yellow');
  default = getComputedStyle(document.documentElement).getPropertyValue('--color-font-light');

  @HostListener('mouseenter')
  changeChar() {
    this.currentChar = this.char.innerText;
    if (this.currentChar == this.currentChar.toUpperCase()) {
      this.renderer.setProperty(this.char, 'innerText', this.currentChar.toLowerCase());
    } else {
      this.renderer.setProperty(this.char, 'innerText', this.currentChar.toUpperCase());
    }
    this.renderer.setStyle(this.char, 'color', this.yellow);
  }

  @HostListener('mouseleave')
  resetChar() {
    this.element.nativeElement.innerText = this.currentChar;
    this.renderer.setStyle(this.char, 'color', this.default);
  }

  constructor() {}
}

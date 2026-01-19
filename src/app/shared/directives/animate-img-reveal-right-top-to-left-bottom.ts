import {
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnimateImgRevealRightTopToLeftBottom]',
})
export class AnimateImgRevealRightToLeft implements AfterViewInit {
  @ContentChild('imgRef', { read: ElementRef }) animateImg!: ElementRef;

  private renderer = inject(Renderer2);
  private elementContainer = inject(ElementRef);

  revalType: string = 'reval-0deg';

  ngAfterViewInit(): void {
    this.renderer.addClass(this.elementContainer.nativeElement, 'animate-container');
    this.renderer.addClass(this.animateImg.nativeElement, 'overlay-rotate-90deg');
    this.renderer.addClass(this.animateImg.nativeElement, this.revalType);

    setTimeout(() => {
      this.removeClass();
    }, 2000);

    setInterval(() => {
      this.addClass();
      setTimeout(() => this.removeClass(), 2000);
    }, 4000);
  }

  addClass() {
    this.renderer.addClass(this.animateImg.nativeElement, this.revalType);
  }

  removeClass() {
    this.renderer.removeClass(this.animateImg.nativeElement, this.revalType);
  }

  constructor() {}
}

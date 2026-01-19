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
  selector: '[appAnimateImgRevealRightToLeft]',
})
export class AnimateImgRevealRightToLeft implements AfterViewInit {
  @Input() animationTrigger!: 'hover' | 'interval';
  @ContentChild('imgRef', { read: ElementRef }) animateImg!: ElementRef;

  private renderer = inject(Renderer2);
  private elementContainer = inject(ElementRef);

  revalType: string = 'revalRightToLeft';

  ngAfterViewInit(): void {
    this.renderer.addClass(this.elementContainer.nativeElement, 'animate-container');
    this.renderer.addClass(this.animateImg.nativeElement, 'overlay-bottom');
    this.renderer.addClass(this.animateImg.nativeElement, this.revalType);

    if (this.animationTrigger == 'interval') {
      setTimeout(() => {
        this.removeClass();
      }, 2000);

      setInterval(() => {
        this.addClass();
        setTimeout(() => this.removeClass(), 2000);
      }, 4000);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.animationTrigger == 'hover') {
      this.removeClass();
    }
  }

  @HostListener('mouseleave')
  notonMouseEnter() {
    if (this.animationTrigger == 'hover') {
      this.addClass();
    }
  }

  addClass() {
    this.renderer.addClass(this.animateImg.nativeElement, this.revalType);
  }

  removeClass() {
    this.renderer.removeClass(this.animateImg.nativeElement, this.revalType);
  }

  constructor() {}
}

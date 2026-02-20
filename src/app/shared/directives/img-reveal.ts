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

type RevealClass =
  | 'reveal-left-to-right'
  | 'reveal-right-to-left'
  | 'reval-0deg'
  | 'reveal-top-to-bottom'
  | 'role-left';

type OverlayClass = 'overlay-bottom' | 'overlay-left' | 'overlay-rotate-90deg' | 'role-overlay';

type RevealTrigger = 'hover' | 'interval';

@Directive({
  selector: '[appImgReveal]',
})
export class ImgReveal implements AfterViewInit {
  @Input({ required: true }) revealClass!: RevealClass;
  @Input({ required: true }) overlayClass!: OverlayClass;
  @Input({ required: true }) trigger: RevealTrigger = 'interval';

  @ContentChild('animateElementRef', { read: ElementRef }) animateElement!: ElementRef;

  private host = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.renderer.removeClass(this.animateElement.nativeElement, 'd-none');
    this.renderer.addClass(this.host.nativeElement, 'animate-container');
    this.renderer.addClass(this.animateElement.nativeElement, this.revealClass);
    this.renderer.addClass(this.animateElement.nativeElement, this.overlayClass);

    if (this.trigger === 'interval') {
      this.startInterval();
    }
  }

  @HostListener('mouseenter')
  onEnter(): void {
    if (this.trigger === 'hover') {
      this.removeReveal();
    }
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (this.trigger === 'hover') {
      this.addReveal();
    }
  }

  private startInterval(): void {
    setTimeout(() => this.removeReveal(), 2000);
    setInterval(() => {
      this.addReveal();
      setTimeout(() => this.removeReveal(), 2000);
    }, 4000);
  }

  private addReveal(): void {
    this.renderer.addClass(this.animateElement.nativeElement, this.revealClass);
  }

  private removeReveal(): void {
    this.renderer.removeClass(this.animateElement.nativeElement, this.revealClass);
  }
}

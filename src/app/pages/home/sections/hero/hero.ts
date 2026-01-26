import { Component, OnInit } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { InvertCase } from '../../../../shared/directives/invert-case';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { Header } from '../../../../shared/components/header/header';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks, InvertCase, CommonModule, TranslatePipe, ImgReveal, Header],

  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  contentFirstLine = 'Fullstack'.split('');
  contentSecondLine = 'DEVELOPER'.split('');

  HelloWorldBtnHover: boolean = false;
  helloWorldBtnContent = 'heroSection.buttons.sayHelloBtn';

  hoverAnimationRunning: boolean = false;
  isOnPolaroid: boolean = false;

  mobileView = false;

  ngOnInit(): void {
    if (window.innerWidth <= 820) {
      this.mobileView = true;
      this.isOnHelloWorldBtn();
      this.HelloWorldBtnHover = true;
      this.isOnPolaroid = true;
    }
  }

  isOnHelloWorldBtn() {
    this.helloWorldBtnContent = 'heroSection.buttons.introduceBtn';
  }

  isNotOnHelloWorldBtn() {
    this.helloWorldBtnContent = 'heroSection.buttons.sayHelloBtn';
    if (this.mobileView) {
      this.helloWorldBtnContent = 'heroSection.buttons.introduceBtn';
    }
  }

  isOnPicture() {
    this.isOnPolaroid = true;
    this.startFrameHoverAnimation();
  }

  isNotOnPicture() {
    this.isOnPolaroid = false;
    this.startFrameHoverAnimation();
    if (this.mobileView) {
      this.isOnPolaroid = true;
    }
  }

  startFrameHoverAnimation() {
    setTimeout(() => (this.hoverAnimationRunning = false), 500);
    this.hoverAnimationRunning = true;
  }

  scrollToContactMe() {
    this.viewportScroller.scrollToAnchor('contact-me');
  }
}

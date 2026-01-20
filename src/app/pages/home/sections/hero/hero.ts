import { Component } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { InvertCase } from '../../../../shared/directives/invert-case';
import { CommonModule } from '@angular/common';
import { ImgReveal } from '../../../../shared/directives/img-reveal';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks, InvertCase, CommonModule, ImgReveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  contentFirstLine = 'Fullstack'.split('');
  contentSecondLine = 'DEVELOPER'.split('');

  HelloWorldBtnHover: boolean = false;
  helloWorldBtnContent = 'Hello World';

  hoverAnimationRunning: boolean = false;
  isOnPolaroid: boolean = false;

  isOnHelloWorldBtn() {
    this.helloWorldBtnContent = '';
  }

  isNotOnHelloWorldBtn() {
    this.helloWorldBtnContent = 'Hello World';
  }

  isOnPicture() {
    this.isOnPolaroid = true;
    this.startFrameHoverAnimation();
  }

  isNotOnPicture() {
    this.isOnPolaroid = false;
    this.startFrameHoverAnimation();
  }

  startFrameHoverAnimation() {
    setTimeout(() => (this.hoverAnimationRunning = false), 500);
    this.hoverAnimationRunning = true;
  }
}

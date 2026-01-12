import { Component } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { InvertCase } from '../../../../shared/directives/invert-case';
import { CommonModule } from '@angular/common';
import { Polaroid } from './components/polaroid/polaroid';
import { BtnHelloWorld } from './components/btn-hello-world/btn-hello-world';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks, InvertCase, CommonModule, Polaroid, BtnHelloWorld],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  contentFirstLine = 'Fullstack'.split('');
  contentSecondLine = 'DEVELOPER'.split('');
}

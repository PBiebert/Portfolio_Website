import { Component } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { InvertCase } from '../../../../shared/directives/invert-case';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks, InvertCase],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  contentFirstLine = 'Fullstack'.split('');
  contentSecondLine = 'DEVELOPER'.split('');
}

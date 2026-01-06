import { Component } from '@angular/core';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}

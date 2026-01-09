import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../social-links/social-links';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';
import { LinksService } from '../../../services/links-service';

@Component({
  selector: 'app-mobile-nav',
  imports: [CommonModule, NgClass, SocialLinks, BtnLangSwitch],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  navItems = inject(LinksService).navItems;
}

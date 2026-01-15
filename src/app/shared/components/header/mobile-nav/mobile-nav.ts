import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../social-links/social-links';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';
import { LinksService } from '../../../services/links-service';
import { NavListItem } from '../../nav-list-item/nav-list-item';

@Component({
  selector: 'app-mobile-nav',
  imports: [SocialLinks, BtnLangSwitch, NavListItem],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  navItems = inject(LinksService).navItems;
}

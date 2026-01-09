import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLinks } from '../../social-links/social-links';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';

interface NavItem {
  title: string;
  href: string;
  hoverImg: string;
  startAnimation: string;
  isHovered: boolean;
}

@Component({
  selector: 'app-mobile-nav',
  imports: [CommonModule, NgClass, SocialLinks, BtnLangSwitch],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss',
})
export class MobileNav {
  navItems: NavItem[] = [
    {
      title: 'Über mich',
      href: '#',
      hoverImg: './assets/img/hover1.png',
      startAnimation: 'startTopToBottom',
      isHovered: false,
    },
    {
      title: 'Fähigkeiten',
      href: '#',
      hoverImg: './assets/img/hover2.png',
      startAnimation: 'startLeftToRight',
      isHovered: false,
    },
    {
      title: 'Projekte',
      href: '#',
      hoverImg: './assets/img/hover3.png',
      startAnimation: 'startLeftToRight',
      isHovered: false,
    },
    {
      title: 'Kontakt',
      href: '#',
      hoverImg: './assets/img/hover4.png',
      startAnimation: 'startLeftToRight',
      isHovered: false,
    },
  ];
}

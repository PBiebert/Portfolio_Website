import { Component } from '@angular/core';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';
import { CommonModule, NgClass } from '@angular/common';

interface NavItem {
  title: string;
  href: string;
  hoverImg: string;
  startAnimation: string;
  isHovered: boolean;
}

@Component({
  selector: 'app-web-nav',
  imports: [BtnLangSwitch, CommonModule, NgClass],
  templateUrl: './web-nav.html',
  styleUrl: './web-nav.scss',
})
export class WebNav {
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

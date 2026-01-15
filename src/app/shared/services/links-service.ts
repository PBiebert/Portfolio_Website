import { Injectable } from '@angular/core';
import { NavItem } from '../../Interfaces/nav-items.interface';
import { ExternLink } from '../../Interfaces/extern-links.interface';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
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

  externLinks: ExternLink[] = [
    {
      title: 'Rechtshinweis',
      href: '#',
      hoverImg: './assets/img/hover4.png',
      startAnimation: 'startLeftToRight',
      isHovered: false,
    },
    {
      title: 'GitHub',
      href: '#',
      hoverImg: '',
      startAnimation: '',
      isHovered: false,
    },
    {
      title: 'LinkedIn',
      href: '#',
      hoverImg: '',
      startAnimation: '',
      isHovered: false,
    },
    {
      title: 'E-Mail',
      href: '#',
      hoverImg: '',
      startAnimation: '',
      isHovered: false,
    },
  ];
}

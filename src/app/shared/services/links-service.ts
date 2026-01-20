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
      animationType: 'topToBottom',
      hoverImg: './assets/img/hover1.png',
    },
    {
      title: 'Fähigkeiten',
      href: '#',
      hoverImg: './assets/img/hover2.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'Projekte',
      href: '#',
      hoverImg: './assets/img/hover3.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'Kontakt',
      href: '#',
      hoverImg: './assets/img/hover4.png',
      animationType: 'rightToLeft',
    },
  ];

  externLinks: ExternLink[] = [
    {
      title: 'Rechtshinweis',
      href: '#',
      hoverImg: './assets/img/hover4.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'GitHub',
      href: '#',
      hoverImg: './assets/icons/github.png',
      animationType: 'role',
    },
    {
      title: 'LinkedIn',
      href: '#',
      hoverImg: './assets/icons/linkedin.png',
      animationType: 'role',
    },
    {
      title: 'E-Mail',
      href: '#',
      hoverImg: './assets/icons/mail.png',
      animationType: 'role',
    },
  ];
}

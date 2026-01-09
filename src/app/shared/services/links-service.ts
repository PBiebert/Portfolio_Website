import { Injectable } from '@angular/core';

interface NavItem {
  title: string;
  href: string;
  hoverImg: string;
  startAnimation: string;
  isHovered: boolean;
}

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
}

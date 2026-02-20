import { Injectable } from '@angular/core';
import { NavItem } from '../../Interfaces/nav-items.interface';
import { ExternLink } from '../../Interfaces/extern-links.interface';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  navItems: NavItem[] = [
    {
      title: 'header.navElements.aboutMe',
      link: 'about-me',
      animationType: 'topToBottom',
      hoverImg: './assets/img/hover1.png',
    },
    {
      title: 'header.navElements.skills',
      link: 'my-stack',
      hoverImg: './assets/img/hover2.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'header.navElements.projects',
      link: 'projects',
      hoverImg: './assets/img/hover3.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'header.navElements.contact',
      link: 'contact-me',
      hoverImg: './assets/img/hover4.png',
      animationType: 'rightToLeft',
    },
  ];

  externLinks: ExternLink[] = [
    {
      title: 'externLinks.imprint',
      link: 'imprint',
      hoverImg: './assets/img/hover4.png',
      animationType: 'rightToLeft',
    },
    {
      title: 'externLinks.github',
      link: 'https://github.com/PBiebert',
      hoverImg: './assets/icons/github.png',
      animationType: 'role',
    },
    {
      title: 'externLinks.linkedin',
      link: 'https://www.linkedin.com/in/philipp-alexander-biebert-55258737a',
      hoverImg: './assets/icons/linkedin.png',
      animationType: 'role',
    },
    {
      title: 'externLinks.email',
      link: 'mailto:contact@philippbiebert.de',
      hoverImg: './assets/icons/mail.png',
      animationType: 'role',
    },
  ];
}

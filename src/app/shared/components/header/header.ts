import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { LinksService } from '../../services/links-service';
import { NavListItem } from '../nav-list-item/nav-list-item';
import { BtnLangSwitch } from '../buttons/btn-lang-switch/btn-switch';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NgClass, NavListItem, BtnLangSwitch, SocialLinks],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  navItems = inject(LinksService).navItems;

  navIsActive: boolean = false;
  burgerOverlayImg: string = './assets/img/nav_pressing_1.png';
  timerExpired: boolean = true;

  openNav() {
    this.navIsActive = !this.navIsActive ? true : false;
    this.burgerOverlayImg = !this.navIsActive
      ? './assets/img/nav_pressing_1.png'
      : './assets/img/nav_pressing_2.png';
    this.timer();
  }

  timer() {
    this.timerExpired = false;
    setTimeout(() => (this.timerExpired = true), 1000);
  }
}

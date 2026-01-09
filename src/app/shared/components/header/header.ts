import { Component } from '@angular/core';
import { WebNav } from './web-nav/web-nav';
import { MobileNav } from './mobile-nav/mobile-nav';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [WebNav, MobileNav, CommonModule, NgClass],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
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

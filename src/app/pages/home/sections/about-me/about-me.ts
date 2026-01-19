import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateImgRevealRightToLeft } from '../../../../shared/directives/animate-img-reveal-right-to-left';

interface Infostrip {
  imgPath: string;
  content: string;
  cssClass: string;
  icon: string;
}

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, NgClass, AnimateImgRevealRightToLeft],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  animatePosition: 'top' | 'middle' | 'bottom' = 'bottom';
  animationTrigger: 'hover' | 'interval' = 'interval';

  strips: Infostrip[] = [
    {
      imgPath: 'assets/img/ripped_paper_01.png',
      content: 'Standort in Lübeck',
      cssClass: 'yellow-strip',
      icon: 'assets/icons/based.png',
    },
    {
      imgPath: 'assets/img/ripped_paper_02.png',
      content: 'Umzugsbereit',
      cssClass: 'blue-strip',
      icon: 'assets/icons/location.png',
    },
    {
      imgPath: 'assets/img/ripped_paper_03.png',
      content: 'Remote möglich',
      cssClass: 'orange-strip',
      icon: 'assets/icons/homework.png',
    },
  ];
}

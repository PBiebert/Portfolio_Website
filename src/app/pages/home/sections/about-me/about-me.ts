import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { TranslatePipe } from '@ngx-translate/core';

interface Infostrip {
  imgPath: string;
  content: string;
  cssClass: string;
  icon: string;
}

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, NgClass, ImgReveal, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  strips: Infostrip[] = [
    {
      imgPath: 'assets/img/ripped_paper_01.png',
      content: 'about-me.strips.location',
      cssClass: 'yellow-strip',
      icon: 'assets/icons/based.png',
    },
    {
      imgPath: 'assets/img/ripped_paper_02.png',
      content: 'about-me.strips.relocate',
      cssClass: 'blue-strip',
      icon: 'assets/icons/location.png',
    },
    {
      imgPath: 'assets/img/ripped_paper_03.png',
      content: 'about-me.strips.remote',
      cssClass: 'orange-strip',
      icon: 'assets/icons/homework.png',
    },
  ];
}

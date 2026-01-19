import { Component } from '@angular/core';
import { AnimateImgRevealRightToLeft } from '../../../../shared/directives/animate-img-reveal-right-to-left';

@Component({
  selector: 'app-contact-me',
  imports: [AnimateImgRevealRightToLeft],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  animationTrigger: 'hover' | 'interval' = 'interval';
}

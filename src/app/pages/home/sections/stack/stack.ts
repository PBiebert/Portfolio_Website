import { Component, inject } from '@angular/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { CommonModule, NgClass } from '@angular/common';
import { StackService } from '../../../../shared/services/stack-service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-stack',
  imports: [ImgReveal, CommonModule, NgClass, TranslatePipe],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  stackServce = inject(StackService);

  overlaySrc: string = 'assets/img/peel-off-default.png';
  noteIsCheckt = false;

  peelTheNote() {
    if (this.noteIsCheckt == false) {
      this.overlaySrc = 'assets/img/peel-off-transition.png';
      setTimeout(() => (this.noteIsCheckt = true), 30);
    } else {
      this.overlaySrc = 'assets/img/peel-off-transition.png';
      setTimeout(() => {
        this.overlaySrc = 'assets/img/peel-off-default.png';
        this.noteIsCheckt = false;
      }, 30);
    }
  }
}

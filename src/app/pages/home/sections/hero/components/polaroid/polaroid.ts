import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-polaroid',
  imports: [CommonModule, NgClass],
  templateUrl: './polaroid.html',
  styleUrl: './polaroid.scss',
})
export class Polaroid {
  hoverAnimationRunning: boolean = false;
  isOnPolaroid: boolean = false;

  isOnPicture() {
    this.isOnPolaroid = true;
    this.startFrameHoverAnimation();
  }

  isNotOnPicture() {
    this.isOnPolaroid = false;
    this.startFrameHoverAnimation();
  }

  startFrameHoverAnimation() {
    setTimeout(() => (this.hoverAnimationRunning = false), 500);
    this.hoverAnimationRunning = true;
  }
}

import { Component } from '@angular/core';
import { Reference } from '../../../../Interfaces/reference.interface';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [ImgReveal, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    {
      name: 'references.items.0.name',
      position: 'references.items.0.position',
      reference: 'references.items.0.reference',
      linkedIn: 'https://www.linkedin.com/in/refiye-kuelhanbey/',
      bgClass: 'reference-bg-1',
    },
    {
      name: 'references.items.1.name',
      position: 'references.items.1.position',
      reference: 'references.items.1.reference',
      linkedIn: 'https://www.linkedin.com/in/akuelhanbey/',
      bgClass: 'reference-bg-2',
    },
    {
      name: 'references.items.2.name',
      position: 'references.items.2.position',
      reference: 'references.items.2.reference',
      linkedIn: '',
      bgClass: 'reference-bg-1',
    },
    {
      name: 'references.items.3.name',
      position: 'references.items.3.position',
      reference: 'references.items.3.reference',
      linkedIn: '',
      bgClass: 'reference-bg-2',
    },
  ];

  currentIndex = 0;

  trackTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  isFirst(): boolean {
    return this.currentIndex === 0;
  }

  isLast(): boolean {
    return this.currentIndex === this.references.length - 1;
  }

  nextSlide(): void {
    if (!this.isLast()) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (!this.isFirst()) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}

import { Component, ElementRef } from '@angular/core';
import { Reference } from '../../../../Interfaces/reference.interface';
import { ImgReveal } from '../../../../shared/directives/img-reveal';

@Component({
  selector: 'app-references',
  imports: [ImgReveal],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    {
      name: 'Werauch Immer',
      position: 'Frontend Developer',
      reference: 'Lorem ipsum dolor sit amet cquos reprehenderit blanditiis illo fugit!',
      linkedIn: '#',
      bgClass: 'reference-bg-1',
    },
    {
      name: 'Kannkeiner Wissen',
      position: 'Frontend Developer',
      reference:
        'Lorem ipsum dolor sit amet cquos reprehenderit blanditiis illo fugit Lorem ipsum dolor sit amet cquos reprehenderit blanditiis illo fugit!',
      linkedIn: '#',
      bgClass: 'reference-bg-2',
    },
    {
      name: 'Keiner Sahihn',
      position: 'Frontend Developer',
      reference:
        'Lorem ipsum dolor sit amet cquos reprehenderit blanditiis illo fugit Lorem ipsum dolor sit amet cquos reprehenderit blanditiis illo fugit!',
      linkedIn: '#',
      bgClass: 'reference-bg-1',
    },
  ];
}

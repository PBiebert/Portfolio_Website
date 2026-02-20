import { Component, ElementRef } from '@angular/core';
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
      linkedIn: '#',
      bgClass: 'reference-bg-1',
    },
    {
      name: 'references.items.1.name',
      position: 'references.items.1.position',
      reference: 'references.items.1.reference',
      linkedIn: '#',
      bgClass: 'reference-bg-2',
    },
    {
      name: 'references.items.2.name',
      position: 'references.items.2.position',
      reference: 'references.items.2.reference',
      linkedIn: '#',
      bgClass: 'reference-bg-1',
    }, 
  ];
}

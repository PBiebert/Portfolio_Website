import { Component } from '@angular/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-contact-me',
  imports: [ImgReveal, Footer],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {}

import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Stack } from './sections/stack/stack';
import { Projects } from './sections/projects/projects';
import { References } from './sections/references/references';
import { ContactMe } from './sections/contact-me/contact-me';
import { BtnBackToStart } from '../../shared/components/buttons/btn-back-to-start/btn-back-to-start';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Stack, Projects, References, ContactMe, BtnBackToStart],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

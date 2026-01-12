import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

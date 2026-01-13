import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Stack } from './sections/stack/stack';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Stack],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

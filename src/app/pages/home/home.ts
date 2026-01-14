import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { AboutMe } from './sections/about-me/about-me';
import { Stack } from './sections/stack/stack';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Stack, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

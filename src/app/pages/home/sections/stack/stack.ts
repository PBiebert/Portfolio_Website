import { Component } from '@angular/core';
import { AnimateImgRevealRightToLeft } from '../../../../shared/directives/animate-img-reveal-right-top-to-left-bottom';

interface StackItem {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-stack',
  imports: [AnimateImgRevealRightToLeft],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  stack: StackItem[] = [
    {
      icon: 'assets/icons/stack/HTML.png',
      title: 'HTML',
    },
    {
      icon: 'assets/icons/stack/CSS.png',
      title: 'CSS',
    },
    {
      icon: 'assets/icons/stack/Js.png',
      title: 'JavaScript',
    },
    {
      icon: 'assets/icons/stack/Ts.png',
      title: 'TypeScript',
    },
    {
      icon: 'assets/icons/stack/Angular.png',
      title: 'Angular',
    },
    {
      icon: 'assets/icons/stack/Firebase.png',
      title: 'Firebase',
    },
    {
      icon: 'assets/icons/stack/Git.png',
      title: 'Git',
    },
    {
      icon: 'assets/icons/stack/Rest-Api.png',
      title: 'REST-API',
    },
    {
      icon: 'assets/icons/stack/Scrum.png',
      title: 'Scrum',
    },
    {
      icon: 'assets/icons/stack/Material Design.png',
      title: 'Material Dedign',
    },

    // Backend
    {
      icon: 'assets/icons/stack/Python.png',
      title: 'Python',
    },
    {
      icon: 'assets/icons/stack/Django.png',
      title: 'Django',
    },
    {
      icon: 'assets/icons/stack/Linux.png',
      title: 'Linux',
    },
    {
      icon: 'assets/icons/stack/Redis.png',
      title: 'Redis',
    },
    {
      icon: 'assets/icons/stack/Flask.png',
      title: 'Flask',
    },
    {
      icon: 'assets/icons/stack/PostgreSQL.png',
      title: 'PostgreSQL',
    },
    {
      icon: 'assets/icons/stack/Heroku.png',
      title: 'Heroku',
    },
    {
      icon: 'assets/icons/stack/SQL.png',
      title: 'SQL',
    },
    {
      icon: 'assets/icons/stack/Docker.png',
      title: 'Docker',
    },
    {
      icon: 'assets/icons/stack/Cloud.png',
      title: 'Cloud',
    },
    {
      icon: 'assets/icons/stack/RxJs.png',
      title: 'RxJs',
    },
  ];

  learningStack: StackItem[] = [
    {
      icon: 'assets/icons/stack/React_no_bg.png',
      title: 'React',
    },
    {
      icon: 'assets/icons/stack/Vue_Js_no_bg.png',
      title: 'Vue.js',
    },
  ];
}

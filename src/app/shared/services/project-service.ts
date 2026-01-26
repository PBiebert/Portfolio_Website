import { Injectable } from '@angular/core';
import { Project } from '../../Interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: '0',
      title: 'projectsService.items.0.title',
      pevImg: 'assets/img/prev-join-start.png',
      description: 'projectsService.items.0.description',
      implementationDetails: 'projectsService.items.0.implementationDetails',
      programmingLanguages: [
        { icon: 'assets/icons/stack/HTML.png', title: 'HTML' },
        { icon: 'assets/icons/stack/CSS.png', title: 'CSS' },
        { icon: 'assets/icons/stack/Js.png', title: 'JavaScript' },
        { icon: 'assets/icons/stack/Angular.png', title: 'Angular' },
        { icon: 'assets/icons/stack/Firebase.png', title: 'Firebase' },
      ],
      duration: 'projectsService.items.0.duration',
      githubLink: 'https://github.com/PBiebert/join',
      testLink: 'https://pbiebert.developerakademie.net/join/',
    },
    {
      id: '1',
      title: 'projectsService.items.1.title',
      pevImg: 'assets/img/prev-sharkie.png',
      description: 'projectsService.items.1.description',
      implementationDetails: 'projectsService.items.1.implementationDetails',
      programmingLanguages: [
        { icon: 'assets/icons/stack/HTML.png', title: 'HTML' },
        { icon: 'assets/icons/stack/CSS.png', title: 'CSS' },
        { icon: 'assets/icons/stack/Js.png', title: 'JavaScript' },
      ],
      duration: 'projectsService.items.1.duration',
      githubLink: 'https://github.com/PBiebert/MODUL-12_Sharkie',
      testLink: 'https://pbiebert.developerakademie.net/sharkie/',
    },
    {
      id: '2',
      title: 'projectsService.items.2.title',
      pevImg: 'assets/img/prev-da-bubble.jpg',
      description: 'projectsService.items.2.description',
      implementationDetails: 'projectsService.items.2.implementationDetails',
      programmingLanguages: [{ icon: 'assets/icons/stack/Angular.png', title: 'Angular' }],
      duration: 'projectsService.items.2.duration',
      githubLink: 'https://github.com/PBiebert/da-bubble',
      testLink: 'https://pbiebert.developerakademie.net/da-bubble/',
    },
  ];
}

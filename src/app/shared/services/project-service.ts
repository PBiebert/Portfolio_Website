import { Injectable } from '@angular/core';
import { Project } from '../../Interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: '0',
      title: 'Join',
      pevImg: 'assets/img/prev-join-start.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
      implementationDetails:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum velit officiis ad soluta atque, dolores ipsum veniam amet totam fugit ullam! Pariatur soluta fuga iusto repudiandae suscipit doloribus omnis quia?',
      programmingLanguages: [
        { icon: 'assets/icons/stack/Angular.png', title: 'Angular' },
        { icon: 'assets/icons/stack/HTML.png', title: 'HTML' },
        { icon: 'assets/icons/stack/Js.png', title: 'JavaScript' },
      ],
      duration: '4 wochen',
      githubLink: 'https://github.com/PBiebert',
      testLink: '',
    },
    {
      id: '1',
      title: 'Sharkie',
      pevImg: 'assets/img/prev-sharkie.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
      implementationDetails:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum velit officiis ad soluta atque, dolores ipsum veniam amet totam fugit ullam! Pariatur soluta fuga iusto repudiandae suscipit doloribus omnis quia?',
      programmingLanguages: [{ icon: 'assets/icons/stack/Angular.png', title: 'Angular' }],
      duration: '4 wochen',
      githubLink: 'https://github.com/PBiebert/MODUL-12_Sharkie',
      testLink: 'assets/projects/001/index.html',
    },
    {
      id: '2',
      title: 'DA-Bubble',
      pevImg: 'assets/img/prev-da-bubble.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
      implementationDetails:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum velit officiis ad soluta atque, dolores ipsum veniam amet totam fugit ullam! Pariatur soluta fuga iusto repudiandae suscipit doloribus omnis quia?',
      programmingLanguages: [{ icon: 'assets/icons/stack/Angular.png', title: 'Angular' }],
      duration: '4 wochen',
      githubLink: 'https://github.com/PBiebert',
      testLink: '',
    },
  ];
}

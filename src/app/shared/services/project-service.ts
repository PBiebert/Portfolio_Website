import { Injectable } from '@angular/core';
import { Project } from '../../Interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      title: 'Join',
      pevImg: 'assets/img/prev-join-start.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
    },
    {
      title: 'Sharkie',
      pevImg: 'assets/img/prev-sharkie.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
    },
    {
      title: 'DA-Bubble',
      pevImg: 'assets/img/prev-da-bubble.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum quaerat veritatis quia quos nemo debitis voluptates veniam nobis perspiciatis, est harum, magni, quae facilis?',
    },
  ];
}

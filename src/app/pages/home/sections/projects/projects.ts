import { Component, inject } from '@angular/core';
import { SingleProject } from './single-project/single-project';
import { Project } from '../../../../Interfaces/project.interface';
import { ProjectService } from '../../../../shared/services/project-service';
import { AnimateImgRevealRightToLeft } from '../../../../shared/directives/animate-img-reveal-right-to-left';

@Component({
  selector: 'app-projects',
  imports: [SingleProject, AnimateImgRevealRightToLeft],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectServic = inject(ProjectService);

  imgPosition: 'top' | 'middle' | 'bottom' = 'bottom';
  animationTrigger: 'hover' | 'interval' = 'interval';
}

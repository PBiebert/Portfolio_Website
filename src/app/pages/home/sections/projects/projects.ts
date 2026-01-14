import { Component, inject } from '@angular/core';
import { SingleProject } from './single-project/single-project';
import { Project } from '../../../../Interfaces/project.interface';
import { ProjectService } from '../../../../shared/services/project-service';

@Component({
  selector: 'app-projects',
  imports: [SingleProject],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectServic = inject(ProjectService);
}

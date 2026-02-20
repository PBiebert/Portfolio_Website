import { Component, inject } from '@angular/core';
import { SingleProject } from './single-project/single-project';
import { ProjectService } from '../../../../shared/services/project-service';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [SingleProject, ImgReveal, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectServic = inject(ProjectService);
}

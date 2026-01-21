import { Component, inject, Input, input } from '@angular/core';
import { ProjectService } from '../../../shared/services/project-service';
import { ImgReveal } from '../../../shared/directives/img-reveal';

@Component({
  selector: 'app-project-details',
  imports: [ImgReveal],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  @Input({ required: true }) projectIndex!: number;
  project = inject(ProjectService).projects[this.projectIndex];
}

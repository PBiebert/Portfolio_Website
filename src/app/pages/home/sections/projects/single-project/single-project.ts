import { Component, Input } from '@angular/core';
import { Project } from '../../../../../Interfaces/project.interface';

@Component({
  selector: 'app-single-project',
  imports: [],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss',
})
export class SingleProject {
  @Input() project!: Project;
}

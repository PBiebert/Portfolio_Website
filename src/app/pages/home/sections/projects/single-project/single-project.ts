import { Component, Input } from '@angular/core';
import { Project } from '../../../../../Interfaces/project.interface';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, NgClass],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss',
})
export class SingleProject {
  @Input() project!: Project;
}

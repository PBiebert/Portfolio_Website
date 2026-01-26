import { Component, Input } from '@angular/core';
import { Project } from '../../../../../Interfaces/project.interface';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, NgClass, RouterLink, TranslatePipe],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss',
})
export class SingleProject {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) projectIndex!: number;
}

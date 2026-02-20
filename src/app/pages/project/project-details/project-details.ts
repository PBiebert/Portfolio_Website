import { Component, inject, Input, input } from '@angular/core';
import { ProjectService } from '../../../shared/services/project-service';
import { ImgReveal } from '../../../shared/directives/img-reveal';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from '../../../shared/components/header/header';
import { Sticker } from '../../../shared/components/sticker/sticker';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [ImgReveal, Header, RouterLink, TranslatePipe, Sticker],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  projectService = inject(ProjectService);
  urlID: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.urlID = params.get('id');
    });
  }

  nextProject() {
    let currentID = Number(this.urlID);
    if (currentID < this.projectService.projects.length - 1) {
      this.urlID = String(currentID + 1);
    } else {
      this.urlID = '0';
    }
  }
}

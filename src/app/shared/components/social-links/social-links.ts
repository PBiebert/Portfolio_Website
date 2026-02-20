import { Component, inject, OnInit } from '@angular/core';
import { LinksService } from '../../services/links-service';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks implements OnInit {
  externLinks = inject(LinksService).externLinks;

  githubLink?: string;
  linkedInLink?: string;
  eMailLink?: string;

  ngOnInit(): void {
    this.githubLink = this.externLinks.find((link) => link.title === 'externLinks.github')?.link;
    this.linkedInLink = this.externLinks.find(
      (link) => link.title === 'externLinks.linkedin',
    )?.link;
    this.eMailLink = this.externLinks.find((link) => link.title === 'externLinks.email')?.link;
  }
}

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
    this.githubLink = this.externLinks.find((link) => link.title === 'GitHub')?.href;
    this.linkedInLink = this.externLinks.find((link) => link.title === 'LinkedIn')?.href;
    this.eMailLink = this.externLinks.find((link) => link.title === 'E-Mail')?.href;
  }
}

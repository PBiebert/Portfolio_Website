import { Component, inject } from '@angular/core';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';
import { CommonModule, NgClass } from '@angular/common';
import { LinksService } from '../../../services/links-service';

@Component({
  selector: 'app-web-nav',
  imports: [BtnLangSwitch, CommonModule, NgClass],
  templateUrl: './web-nav.html',
  styleUrl: './web-nav.scss',
})
export class WebNav {
  navItems = inject(LinksService).navItems;
}

import { Component, inject } from '@angular/core';
import { BtnLangSwitch } from '../../buttons/btn-lang-switch/btn-switch';
import { LinksService } from '../../../services/links-service';
import { NavListItem } from '../../nav-list-item/nav-list-item';

@Component({
  selector: 'app-web-nav',
  imports: [BtnLangSwitch, NavListItem],
  templateUrl: './web-nav.html',
  styleUrl: './web-nav.scss',
})
export class WebNav {
  navItems = inject(LinksService).navItems;
}

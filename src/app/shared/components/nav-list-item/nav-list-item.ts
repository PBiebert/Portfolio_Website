import { Component, Input } from '@angular/core';
import { NavItem } from '../../../Interfaces/nav-items.interface';
import { ImgReveal } from '../../directives/img-reveal';

@Component({
  selector: 'app-nav-list-item',
  imports: [ImgReveal],
  templateUrl: './nav-list-item.html',
  styleUrl: './nav-list-item.scss',
})
export class NavListItem {
  @Input() item!: NavItem;
  animationTrigger: 'hover' | 'interval' = 'hover';
}

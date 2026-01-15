import { Component, Input } from '@angular/core';
import { NavItem } from '../../../Interfaces/nav-items.interface';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-list-item',
  imports: [NgClass, CommonModule],
  templateUrl: './nav-list-item.html',
  styleUrl: './nav-list-item.scss',
})
export class NavListItem {
  @Input() item!: NavItem;
}

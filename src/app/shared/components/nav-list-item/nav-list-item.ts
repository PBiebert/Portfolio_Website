import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../../Interfaces/nav-items.interface';
import { ImgReveal } from '../../directives/img-reveal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-list-item',
  imports: [ImgReveal, TranslatePipe],
  templateUrl: './nav-list-item.html',
  styleUrl: './nav-list-item.scss',
})
export class NavListItem {
  @Input() item!: NavItem;
  @Output() itemClicked = new EventEmitter<void>();
  animationTrigger: 'hover' | 'interval' = 'hover';

  onItemClicked(event: Event) {
    this.itemClicked.emit();
  }
}

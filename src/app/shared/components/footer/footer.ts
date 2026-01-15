import { Component, inject } from '@angular/core';
import { LinksService } from '../../services/links-service';
import { NavListItem } from '../nav-list-item/nav-list-item';

@Component({
  selector: 'app-footer',
  imports: [NavListItem],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerItems = inject(LinksService).externLinks;
}

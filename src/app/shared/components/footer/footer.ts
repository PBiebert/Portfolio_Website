import { Component, inject } from '@angular/core';
import { LinksService } from '../../services/links-service';
import { NavListItem } from '../nav-list-item/nav-list-item';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe, NavListItem],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerItems = inject(LinksService).externLinks;
}

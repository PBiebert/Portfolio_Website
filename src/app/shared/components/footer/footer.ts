import { Component, inject } from '@angular/core';
import { LinksService } from '../../services/links-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerItems = inject(LinksService).externLinks;
}

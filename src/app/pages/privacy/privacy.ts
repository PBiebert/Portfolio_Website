import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticker',
  imports: [],
  templateUrl: './sticker.html',
  styleUrl: './sticker.scss',
})
export class Sticker {
  @Input() bgColor: 'orange' | 'yellow' = 'orange';
}

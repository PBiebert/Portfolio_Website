import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-hello-world',
  imports: [CommonModule, NgClass],
  templateUrl: './btn-hello-world.html',
  styleUrl: './btn-hello-world.scss',
})
export class BtnHelloWorld {
  HelloWorldBtnHover: boolean = false;
  helloWorldBtnContent = 'Hello World';

  isOnHelloWorldBtn() {
    this.helloWorldBtnContent = 'Mein Name ist Philipp';
  }

  isNotOnHelloWorldBtn() {
    this.helloWorldBtnContent = 'Hello World';
  }
}

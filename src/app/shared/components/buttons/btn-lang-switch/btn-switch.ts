import { NgClass } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-btn-lang-switch',
  imports: [NgClass],
  templateUrl: './btn-switch.html',
  styleUrl: './btn-switch.scss',
})
export class BtnLangSwitch {
  overlayImg: string = 'assets/icons/lang-toggle-frame.png';
  timerExpired: boolean = true;
  lang: 'de' | 'en' = 'de';
  activeOverlay: 'de' | 'en' | null = null;
  private translate = inject(TranslateService);

  setLang(lang: 'de' | 'en') {
    this.lang = lang;
    this.showOverlay(lang);
    this.useLanguage(lang);
  }

  toggleLang() {
    this.lang = this.lang === 'de' ? 'en' : 'de';
    this.showOverlay(this.lang);
  }

  showOverlay(lang: 'de' | 'en') {
    this.activeOverlay = lang;
    this.timerExpired = false;
    setTimeout(() => {
      this.timerExpired = true;
      this.activeOverlay = null;
    }, 1000);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}

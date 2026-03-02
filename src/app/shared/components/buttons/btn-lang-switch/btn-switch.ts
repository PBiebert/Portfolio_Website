import { NgClass } from '@angular/common';
import { Component, signal, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-btn-lang-switch',
  imports: [NgClass],
  templateUrl: './btn-switch.html',
  styleUrl: './btn-switch.scss',
})
export class BtnLangSwitch implements OnInit {
  overlayImg: string = 'assets/icons/lang-toggle-frame.png';
  timerExpired: boolean = true;
  lang: 'de' | 'en' = 'de';
  activeOverlay: 'de' | 'en' | null = null;
  private translate = inject(TranslateService);

  /**
   * Initialisiert die Komponente und setzt die Sprache aus localStorage
   */
  ngOnInit() {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'de' || storedLang === 'en') {
      this.lang = storedLang;
      this.useLanguage(storedLang);
    } else {
      // Fallback: hole Sprache aus TranslateService falls vorhanden
      const currentLang = this.translate.currentLang || 'de';
      this.lang = currentLang === 'en' ? 'en' : 'de';
      this.useLanguage(this.lang);
    }
  }

  setLang(lang: 'de' | 'en') {
    this.lang = lang;
    localStorage.setItem('lang', lang);
    this.showOverlay(lang);
    this.useLanguage(lang);
  }

  toggleLang() {
    this.lang = this.lang === 'de' ? 'en' : 'de';
    localStorage.setItem('lang', this.lang);
    this.showOverlay(this.lang);
    this.useLanguage(this.lang);
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

import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { Footer } from '../../../../shared/components/footer/footer';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-contact-me',
  imports: [ImgReveal, Footer, FormsModule, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  private http = inject(HttpClient);
  @ViewChild('thankYouDialog') thankYouDialog!: ElementRef<HTMLDialogElement>;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyCheck: false,
  };

  mailTest = true;

  private post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          this.openThankYouDialog();
          this.autoCloseThankYouDialog();
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.openThankYouDialog();
      this.autoCloseThankYouDialog();

      ngForm.resetForm();
    }
  }

  private openThankYouDialog() {
    this.thankYouDialog.nativeElement.showModal();
    this.renderer.addClass(this.document.body, 'no-scroll-y');
  }

  closeThankYouDialog() {
    this.thankYouDialog.nativeElement.close();
    this.renderer.removeClass(this.document.body, 'no-scroll-y');
  }

  private autoCloseThankYouDialog() {
    setTimeout(() => this.closeThankYouDialog(), 5000);
  }
}

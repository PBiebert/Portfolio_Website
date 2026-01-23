import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ImgReveal } from '../../../../shared/directives/img-reveal';
import { Footer } from '../../../../shared/components/footer/footer';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  imports: [ImgReveal, Footer, FormsModule, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  http = inject(HttpClient);
  @ViewChild('thankYouDialog') thankYouDialog!: ElementRef<HTMLDialogElement>;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyCheck: false,
  };

  mailTest = true;

  post = {
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
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.thankYouDialog.nativeElement.showModal();
      ngForm.resetForm();
    }
  }
}

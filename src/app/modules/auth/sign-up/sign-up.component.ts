import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegexService } from 'src/app/services/regex.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  passwordVisible: boolean = false;
  showRegisterErrorMsg: boolean = false;
  signUpForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    emailId: ["", [Validators.required, Validators.pattern(this.regexService.email)]],
    phone: ["", [Validators.required, Validators.pattern(this.regexService.phoneNumber)]],
    password: ["", [Validators.required, Validators.pattern(this.regexService.passwordPattern)]]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private regexService: RegexService,
    private authService: AuthService
  ) { }

  submit() {
    const signUpForm = this.signUpForm;

    const { emailId, password } = signUpForm.getRawValue();
    if (signUpForm.invalid) {
      signUpForm.markAllAsTouched();
    } else {
      const isEmailRegistered = this.authService.getRegisteredEmails().some(account => account.emailId===emailId);
      
      if (!!isEmailRegistered) {
        this.showRegisterErrorMsg = true;
        setTimeout(() => {
          this.showRegisterErrorMsg = false;
        }, 5000);
      } else {
        this.authService.signUp(signUpForm.getRawValue());
      }
    }
  }
}

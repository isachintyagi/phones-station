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
  passwordVisible = false;
  singupForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    emailId: ["", [Validators.required, Validators.pattern(this.regexService.email)]],
    phone: ["", [Validators.required, Validators.pattern(this.regexService.phoneNumber)]],
    password: ["", [Validators.required, Validators.pattern(this.regexService.passwordPattern)]]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private regexService: RegexService,
    private router: Router,
    private authService: AuthService
  ) { }

  submit() {

    this.authService.registeredEmails.subscribe((value)=>{
console.log("vaue",value);

    })
    if (this.singupForm.invalid) {
      this.singupForm.markAllAsTouched();
    } else {
      // this.authService.signUp(this.singupForm.getRawValue());
    }
  }
}

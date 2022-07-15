import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegexService } from 'src/app/services/regex.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {
  passwordVisible = false;
  loginForm: FormGroup = this.fb.group({
    emailId: ["", [Validators.required, Validators.pattern(this.regexService.email)]],
    password: ["", [Validators.required, Validators.pattern(this.regexService.passwordPattern)]]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private regexService: RegexService,
    private router: Router
  ) { }

  submit() {
    console.log("loginForm", this.loginForm);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      const { emailId, password } = this.loginForm.value;
      this.router.navigate(["/dashboard"]);
    }
  }


  ngOnDestroy(): void {
  }
}

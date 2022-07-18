import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegexService } from 'src/app/services/regex.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  passwordVisible: boolean = false;
  showRegisterErrorMsg: boolean = false;
  loginForm: FormGroup = this.fb.group({
    emailId: ["", [Validators.required, Validators.pattern(this.regexService.email)]],
    password: ["", [Validators.required, Validators.pattern(this.regexService.passwordPattern)]]
  });

  constructor(
    private fb: UntypedFormBuilder,
    private regexService: RegexService,
    private authService: AuthService
  ) { }

  submit() {
    const { emailId, password } = this.loginForm.getRawValue();
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.registeredEmails.subscribe((value) => {

        if (value.includes(emailId)) {
          this.authService.login(this.loginForm.getRawValue());
        } else {
          this.showRegisterErrorMsg = true;
          setTimeout(() => {
            this.showRegisterErrorMsg = false;
          }, 5000);
        }
      })
    }
  }
}

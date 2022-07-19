import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  userDetails: any = {};

  constructor(
    private authService: AuthService
  ) { }

  logoutUser() {
    this.authService.logout();
  }
}

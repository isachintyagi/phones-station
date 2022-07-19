import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  userDetails: any = {};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  this.userDetails=this.authService.getUserFromLocalStorage();
  }

  logoutUser() {
    this.authService.logout();
  }
}

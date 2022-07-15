import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  getAuthFromLocalStorage(): any {
    const authData = JSON.parse(`${localStorage.getItem("token")}`);
    return authData || {};
  }

  logout() {
    console.log("logout clicked");
    
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}

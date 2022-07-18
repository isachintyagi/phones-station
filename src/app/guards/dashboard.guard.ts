import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivateChild {

  constructor(
    private authService: AuthService
  ) { }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const authData = this.authService.getUserFromLocalStorage();

    if (authData && authData.token) {
      return true;
    }

    // not logged in, redirect to login page 
    this.authService.logout();
    return false;
  }
}

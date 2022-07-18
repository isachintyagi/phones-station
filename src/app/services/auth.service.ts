import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registeredEmails: BehaviorSubject<any[]> = new BehaviorSubject([]);

  mockLoginResponseData: any = {
    "id": 0,
    "message": "Successful!",
    "statusCode": 200,
    "data": {
      "userId": 1,
      "token": "eyJhbGciOiJIUzI1MxIsInR5cCI6IkpXVCJ9.eyJuYW1laVQiOiIxIiwicm9sZSI6Ik1hc3RlciBBZG1pbiIsIm5hbWUiOiJyb2Jpbi5rdW1hckBhbGdvd29ya3MuY29tIiwibmJmIjoxNjU4MTM0MjY4LCJleHAiOjE2NTgyMjA2NjgsImlhdCI6MTY1ODEzNDI2OCwiaXNzIjoiUVRfQVBJIiwiYXVkIjoiUVRfQVBJIn0.RhJ7ihzcbgRYR01iDGfzMxeNG348tQ4s6am874Turvo",
      "isAuthenticated": true,
      "email": "sachin.kumar@xyc.com",
      "role": "Master Admin",
      "userFullName": "Sachin Kumar",
    }
  }

  constructor(
    private router: Router
  ) { }

  login({ emailId, password }: any) {
    this.registeredEmails.next([emailId]);
    this.mockLoginResponseData.email = emailId;

    const resData = this.mockLoginResponseData;
    this.saveUserDetailsInLocalStorage(resData?.data);
    this.router.navigate(["/dashboard"]);
  }

  signUp({ emailId, password }: any) {
    const resData = this.mockLoginResponseData;
    this.saveUserDetailsInLocalStorage(resData?.data);
    this.router.navigate(["/dashboard"]);
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  getUserFromLocalStorage(): any {
    const authData = JSON.parse(`${localStorage.getItem("userDetails")}`);
    return authData;
  }

  saveUserDetailsInLocalStorage(user: any): boolean {
    if (user) {
      localStorage.setItem("userDetails", JSON.stringify(user));
      return true;
    }
    return false;
  }
}

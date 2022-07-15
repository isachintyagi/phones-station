import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {
  email = /^((?:[a-zA-Z0-9]+)|(([a-zA-Z0-9]+(\.|\+|\-|_))+[a-zA-Z0-9]+))@(([a-zA-Z0-9]+(\.|\-))+[a-zA-Z]{2,})$/;

  passwordPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  phoneNumber = new RegExp(
    /^(\(?\+?[0-9]*\)?)?[0-9\- \(\)]*$/
  );
}

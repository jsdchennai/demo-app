import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Credentials } from 'src/app/models';
import { CREDENTIALS } from 'src/assets/credentials';
import { USER } from 'src/assets/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(credentials: Credentials) {
    if (
      credentials.email == CREDENTIALS.email &&
      credentials.password == CREDENTIALS.password
    ) {
      return of(USER);
    }

    return throwError(() => new Error('User not found!'));
  }
}

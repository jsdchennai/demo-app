import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Credentials } from 'src/app/models';
import { CREDENTIALS } from 'src/assets/credentials';

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
      let user = {
        name: 'user',
        email: 'user@gmail.com',
      };
      return of(user);
    }

    return throwError(() => new Error('User not found!'));
  }
}

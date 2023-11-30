import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  login(user: any) {
    this.authService.login(user).subscribe({
      next: () => {},
      error: () => {},
    });
  }
}

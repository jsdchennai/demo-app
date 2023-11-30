import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services';
import { Credentials } from 'src/app/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  submit(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        let snackBarRef = this.snackBar.open(err);
        setTimeout(() => snackBarRef.dismiss(), 2000);
      },
    });
  }

  ngOnInit(): void {
    let user = localStorage.getItem('user');

    if (user) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}

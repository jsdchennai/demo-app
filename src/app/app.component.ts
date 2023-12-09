import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from './core/services';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedInUser: any;

  recommendedProfiles: User[] = [];

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  getRecommendedProfiles() {
    this.dashboardService.getRecommendedProfiles().subscribe({
      next: (res) => {
        this.recommendedProfiles = res;
      },
    });
  }

  submit(value: string) {}

  routeToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));

    this.getRecommendedProfiles();
  }
}

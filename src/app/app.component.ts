import { Component, OnInit } from '@angular/core';
import { DashboardService } from './core/services';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  recommendedProfiles: User[] = [];

  constructor(private dashboardService: DashboardService) {}

  getRecommendedProfiles() {
    this.dashboardService.getRecommendedProfiles().subscribe({
      next: (res) => {
        this.recommendedProfiles = res;
      },
    });
  }

  ngOnInit(): void {
    this.getRecommendedProfiles();
  }

  submit(value: string) {}
}

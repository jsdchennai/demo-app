import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/core/services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-profile-details-container',
  templateUrl: './profile-details-container.component.html',
  styleUrls: ['./profile-details-container.component.scss'],
})
export class ProfileDetailsContainerComponent implements OnInit {
  profile: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  getProfileDetailById() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.dashboardService.getProfileById(id).subscribe({
      next: (res) => {
        this.profile = res;
      },
      error: (err) => {},
    });
  }

  ngOnInit(): void {
    this.getProfileDetailById();
  }
}

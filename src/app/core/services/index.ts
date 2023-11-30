import { AuthService } from './auth.service';
import { DashboardService } from './dashboard.service';

export const services = [DashboardService, AuthService];

export * from './dashboard.service';
export * from './auth.service';

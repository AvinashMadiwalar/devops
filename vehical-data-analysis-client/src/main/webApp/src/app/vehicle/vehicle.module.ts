import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpeedAnalysisComponent } from './speed-analysis/speed-analysis.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [DashboardComponent, SpeedAnalysisComponent],
	imports: [CommonModule, RouterModule, SharedModule],
	providers: [],
	exports: [],
})
export class VehicleModule {}

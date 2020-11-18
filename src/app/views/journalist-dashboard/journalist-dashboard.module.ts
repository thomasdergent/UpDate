import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistDashboardComponent } from './journalist-dashboard/journalist-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [JournalistDashboardComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ]
})
export class JournalistDashboardModule { }

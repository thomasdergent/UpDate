import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';



@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,

    BrowserAnimationsModule,
    RouterModule,

    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top' }),
  ]
})
export class AdminDashboardModule { }

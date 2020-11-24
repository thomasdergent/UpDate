import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistDashboardComponent } from './journalist-dashboard/journalist-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';



@NgModule({
  declarations: [JournalistDashboardComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule,
 
    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'}),
  ]
})
export class JournalistDashboardModule { }

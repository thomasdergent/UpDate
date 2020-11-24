import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTagsComponent } from './manage-tags/manage-tags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-alerts';



@NgModule({
  declarations: [ManageTagsComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
 
    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'}),
  ]
})
export class ManageTagsModule { }

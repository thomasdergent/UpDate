import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTagsComponent } from './manage-tags/manage-tags.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ManageTagsComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ManageTagsModule { }

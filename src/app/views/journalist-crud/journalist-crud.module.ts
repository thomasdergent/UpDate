import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistCRUDComponent } from './journalist-crud/journalist-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [JournalistCRUDComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class JournalistCRUDModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SignUpModule { }

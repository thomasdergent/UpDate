import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AddarticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AddarticleModule { }

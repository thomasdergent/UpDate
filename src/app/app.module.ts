import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './views/login/login.interceptor';

import { SharedModule } from './shared/shared.module';
import { AddarticleModule } from './views/addarticle/addarticle.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {HeaderComponent} from './layout/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AddarticleModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

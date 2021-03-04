import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/handler/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from 'src/app/handler/global-error.handler';

const interceptorError = [
  { provide: ErrorHandler, useClass: GlobalErrorHandler },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];

@NgModule({
  declarations: [HomeComponentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [HomeComponentComponent],
  providers: [interceptorError]
})
export class HomeModule { }

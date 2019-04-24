import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TwoDigitDecimaNumberDirective } from './decimal.directive';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';
import { TestService } from './services/test.service';
import { ErrorDialogService } from './error-dialog/errordialog.service';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TwoDigitDecimaNumberDirective,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

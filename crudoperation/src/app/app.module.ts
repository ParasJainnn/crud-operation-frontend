import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageComponent } from './message/message.component';

import{HttpClientModule} from '@angular/common/http'
import{MessageService} from './services/message.service';
import{HttpErrorHandler} from './services/http-error-handler.service';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  
    MessageComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler,

    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

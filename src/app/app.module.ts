import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service'
import { AppRoutingModule } from './routing/app.routing.module'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownModule } from "ngx-dropdown";
import { HttpService } from 'app/generic-http/http-service';
import { httpFactory } from './generic-http/http-factory';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    DropdownModule
    // NgbModule.forRoot()
  ],
  providers: [{
    provide: HttpService,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions],
  }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

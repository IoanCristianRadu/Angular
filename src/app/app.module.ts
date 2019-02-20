import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingCheatsheetComponent } from './data-binding-cheatsheet/data-binding-cheatsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DashboardComponent,
    HeaderComponent,
    DataBindingCheatsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

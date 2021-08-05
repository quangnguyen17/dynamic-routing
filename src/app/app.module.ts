import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/world/world.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HelloComponent, WorldComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

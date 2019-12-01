import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './shared/pipes/SafePipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVideosComponent } from './list-videos/list-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './shared/pipes/SafePipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    SafePipe,
    WatchVideoComponent
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

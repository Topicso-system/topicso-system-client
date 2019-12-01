import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { SafePipe } from './shared/pipes/SafePipe';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'watchVideo', component: WatchVideoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ListVideosComponent,
    SafePipe,
    WatchVideoComponent.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

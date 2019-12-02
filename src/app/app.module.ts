import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { ListVideosComponent } from './videos/list-video/list-video.component';
import { WatchVideoComponent } from './videos/watch-video/watch-video.component';
import { SafePipe } from './shared/pipes/safe/safe.pipe';
import { VideoFilterComponent } from './videos/video-filter/video-filter.component';

const appRoutes: Routes = [
  { path: 'list', component: ListVideosComponent },
  { path: 'watchVideo/:youtubeId', component: WatchVideoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ListVideosComponent,
    SafePipe,
    WatchVideoComponent,
    VideoFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

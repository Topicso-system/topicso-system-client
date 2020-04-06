import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { ListVideosComponent } from './video/component/list-video/list-video.component';
import { WatchVideoComponent } from './video/component/watch-video/watch-video.component';
import { SafePipe } from './shared/pipes/safe/safe.pipe';
import { VideoFilterComponent } from './video/component/video-filter/video-filter.component';
import { VideoCardComponent } from './video/component/video-card/video-card.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { environment } from 'src/environments/environment';
import { ListCategoryComponent } from './category/component/list-category/list-category.component';


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
    VideoFilterComponent,
    VideoCardComponent,
    NavigationComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RatingModule
  ],
  providers: [{ provide: "API_BASE_URL", useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }

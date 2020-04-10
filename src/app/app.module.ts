import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { VideoListComponent } from './video/component/video-list/video-list.component';
import { WatchVideoComponent } from './video/component/watch-video/watch-video.component';
import { SafePipe } from './shared/pipes/safe/safe.pipe';
import { VideoFilterComponent } from './video/component/video-filter/video-filter.component';
import { VideoListItemComponent } from './video/component/video-list-item/video-list-item.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { environment } from 'src/environments/environment';
import { ListCategoryComponent } from './category/component/list-category/list-category.component';
import { CategoryCardComponent } from './category/component/category-card/category-card.component';
import { VideoGridComponent } from './video/component/video-grid/video-grid.component';
import { VideoGridItemComponent } from './video/component/video-grid-item/video-grid-item.component';


const appRoutes: Routes = [
  { path: 'list', component: VideoListComponent },
  { path: 'category/:categoryId', component: VideoGridComponent },
  { path: 'watchVideo/:youtubeId', component: WatchVideoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    VideoListComponent,
    SafePipe,
    WatchVideoComponent,
    VideoFilterComponent,
    VideoListItemComponent,
    NavigationComponent,
    ListCategoryComponent,
    CategoryCardComponent,
    VideoGridComponent,
    VideoGridItemComponent
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

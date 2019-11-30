import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: VideosComponent,
    data: { title: 'Videos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

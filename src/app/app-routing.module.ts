import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideosComponent } from './videos/list-video/list-video.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: ListVideosComponent,
    data: { title: 'Videos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

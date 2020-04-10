import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video/component/video-list/video-list.component';
import { ListCategoryComponent } from './category/component/list-category/list-category.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: VideoListComponent,
    data: { title: 'Videos' }
  },
  {
    path: 'categories',
    component: ListCategoryComponent,
    data: { title: 'Categories' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

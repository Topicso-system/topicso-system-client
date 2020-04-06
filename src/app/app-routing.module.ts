import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideosComponent } from './video/component/list-video/list-video.component';
import { ListCategoryComponent } from './category/component/list-category/list-category.component';


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

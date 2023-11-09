import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AlbumListComponent } from './album-list/album-list.component';
 import { PostItemComponent } from './post-item/post-item.component';
 import { PostListComponent } from './post-list/post-list.component';
 import { PhotosComponent } from './album/photos/photos.component';

const routes: Routes = [
   { path: 'posts-item', component: PostItemComponent },
   { path: 'albums', component: AlbumListComponent },
   { path: 'albums/photos', component: PhotosComponent },
   { path: 'post-list', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: "posts", pathMatch: "full"},
  { path: 'new',   component: NewPostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
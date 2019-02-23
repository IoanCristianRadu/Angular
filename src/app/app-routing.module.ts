import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { DataBindingCheatsheetComponent } from './data-binding-cheatsheet/data-binding-cheatsheet.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'home',   component: HomeComponent },
  { path: 'new',   component: NewPostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'blog',   component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'example', component: DataBindingCheatsheetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
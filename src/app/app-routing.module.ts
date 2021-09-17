import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'todos', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

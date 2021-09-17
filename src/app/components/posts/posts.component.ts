import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/models/placeholder.model';
import { PostsService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts: posts;
  erro: any;
  constructor(private postsService: PostsService) {
    this.getterPosts()
   }

  ngOnInit() {
  }
  getterPosts() {
    this.postsService.getPosts().subscribe((data: posts) => {
      this.posts = data
    }, 
    (error: any) => {
      this.erro = error;
    });
  }

}
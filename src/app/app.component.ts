
import { Component, OnInit } from '@angular/core';
import { PostService } from './path-to-post-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: any = 'pac-2';
  posts: any[] = [];
  comments: { [postId: number]: any } = {};
  showComments: { [postId: number]: boolean } = {};

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.error('Failed to fetch posts', error);
      }
    );
  }

  toggleComments(postId: number) {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.fetchComments(postId);
      this.showComments[postId] = true;
    }
  }

  fetchComments(postId: number) {
    this.postService.getComments(postId).subscribe(
      (data: any) => {
        this.comments[postId] = data;
      },
      (error: any) => {
        console.error(`Failed to fetch comments for post ${postId}`, error);
      }
    );
  }
}

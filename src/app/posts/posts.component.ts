import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [new Post("Title","Text1")]

  constructor() {
    this.posts.push(new Post("Title","Text1"));
    this.posts.push(new Post("Title2","Text2"));
    this.posts.push(new Post("Title3","Text3"));
    this.posts.push(new Post("Title4","Text4"));
   }

  ngOnInit() {
  }

}

class Post {
  title;
  text;
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  // Getter
  get combinedText() {
    return this.combineTitleText();
  }
  // Method
  combineTitleText() {
    return this.title * this.text;
  }

}

import { Component, OnInit, NgModule } from '@angular/core';

@NgModule()

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: String = "";
  content: String = "";
  posts: Post[] = [];
  myNgModel = "";

  constructor() {
    this.posts.push(new Post("Title","Text1"));
    this.posts.push(new Post("Title2","Text2"));
    this.posts.push(new Post("Title3","Text3"));
    this.posts.push(new Post("Title4","Text4"));
   }

  ngOnInit() {
  }

  addPost(){
    if(this.title != "" && this.content != "") {
      this.posts.push(new Post(this.title,this.content));
    }
  }

  dismissPost (){
    return "modal";
  }

}

class Post {
  title;
  content;
  constructor(title, text) {
    this.title = title;
    this.content = text;
  }

  // Getter
  get combinedText() {
    return this.combineTitleText();
  }
  // Method
  combineTitleText() {
    return this.title * this.content;
  }

}

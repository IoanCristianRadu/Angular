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
    this.posts.push(new Post("My first post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet enim eu lorem luctus pulvinar. Fusce interdum vestibulum convallis. Integer lacinia ut nulla vitae scelerisque. Phasellus tristique enim sed nisl viverra, et fermentum sem facilisis. Vivamus et nibh non quam aliquam iaculis id a lectus. Donec efficitur mattis massa, sed aliquet purus congue id. Morbi id molestie lacus, sit amet vehicula nisl. Etiam in tristique massa."));
    this.posts.push(new Post("Amazing butterflies","Aren't butterflies amazing?"));
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

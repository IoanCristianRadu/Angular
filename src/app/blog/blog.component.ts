import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  setsOfThreePosts: ThreeBlogPosts[] = [];
  blogPostOne: BlogPost;
  blogPostTwo: BlogPost;
  blogPostThree: BlogPost;
  title: String;
  content: String;
  photoURL: string;
  blogPostOneIsNull: Boolean = true;
  blogPostTwoIsNull: Boolean = true;

  constructor() {
    this.setsOfThreePosts.push(new ThreeBlogPosts(
      new BlogPost("Card title",
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Photos-Beautiful-HD-Download-PIC-WPD0012872.jpg"),
      new BlogPost("Card title",
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Photos-Beautiful-HD-Download-PIC-WPD0012872.jpg"),
      new BlogPost("Card title",
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Photos-Beautiful-HD-Download-PIC-WPD0012872.jpg")));
    console.log(this.setsOfThreePosts);
  }

  ngOnInit() {
  }

  addPost() {
    if (this.blogPostOne == null) {
      this.blogPostOne = new BlogPost(this.title, this.content, this.photoURL);
      this.blogPostOneIsNull = false;
    } else if (this.blogPostTwo == null) {
      this.blogPostTwo = new BlogPost(this.title, this.content, this.photoURL);
      this.blogPostTwoIsNull = false;
    } else {
      this.blogPostThree = new BlogPost(this.title, this.content, this.photoURL);
      this.setsOfThreePosts.push(new ThreeBlogPosts(this.blogPostOne, this.blogPostTwo, this.blogPostThree));

      this.blogPostOne = null;
      this.blogPostTwo = null;
      this.blogPostThree = null;

      this.blogPostOneIsNull = true;
      this.blogPostTwoIsNull = true;
    }
  }
}

class BlogPost {
  title: String;
  content: String;
  photoURL: String;

  constructor(title, text, photoURL) {
    this.title = title;
    this.content = text;
    this.photoURL = photoURL;
    console.log(photoURL);
  }
  /*
  get Title() {
    return this.title;
  }

  get Content() {
    return this.content;
  }

  get PhotoURL() {
    return this.photoURL;
  }*/
}

class ThreeBlogPosts {
  threeBlogPosts: BlogPost[] = [];

  constructor(blogPostOne, blogPostTwo, blogPostThree) {
    this.threeBlogPosts[0] = blogPostOne;
    this.threeBlogPosts[1] = blogPostTwo;
    this.threeBlogPosts[2] = blogPostThree;
  }
  get postOne() {
    return BlogPost[0];
  }
  get postTwo() {
    return BlogPost[1];
  }
  get postThree() {
    return BlogPost[2];
  }
}
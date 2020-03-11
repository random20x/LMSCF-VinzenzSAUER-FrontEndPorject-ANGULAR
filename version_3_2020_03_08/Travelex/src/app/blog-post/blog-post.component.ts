import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogitems } from '../blogdata';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blogitem;
  blogitems = blogitems;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogitem = blogitems[+params.get('postId')];
     });
  }

}

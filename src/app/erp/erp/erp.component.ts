import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/viewModels/post';
import { PostService } from 'src/app/apis/post.service';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {

  constructor(private postApi : PostService) { }
  posts : Post[];
  ngOnInit() {
    this.postApi.getAllPosts()
    .subscribe((data : Post[])=>{
      this.posts = data
    })
  }

}

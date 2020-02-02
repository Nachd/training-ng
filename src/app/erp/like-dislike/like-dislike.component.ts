import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/viewModels/post';
import { PostService } from 'src/app/apis/post.service';
import { React } from 'src/app/viewModels/react';
import { User } from 'src/app/viewModels/user';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  @Input() p : Post;
  constructor(private postApi : PostService) { }

  isLike = false;
  isDislike = false;
  nbr_like = 0;
  nbr_dislike = 0;
  userReact : React = new React();
  user : User ;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.userReact.userId = this.user;
    this.userReact.postId = this.p;
    console.log(this.p)
     this.getData();
  }

  getData(){
    //requete status
    //count like 
    //count dislike

    this.postApi.getReactsByPostId(this.p._id)
    .subscribe((data : React[])=>{
      this.nbr_like = data.filter((r)=> r.reaction == 'like').length
      this.nbr_dislike = data.filter((r)=> r.reaction == 'dislike').length

         
    //if undefined
    //if like => this.isLike = true;
    //if dislike => isDislike = true;
     let x =  data.filter((r)=> r.userId == this.user._id)
     if(x && x.length>0){
       this.userReact = x[0];
       if(this.userReact.reaction == 'like'){
         this.isLike = true;
       }else if(this.userReact.reaction == 'dislike'){
         this.isDislike = true;
       }
     }
    })
  }
  changeStatus(s){
    if(s == 'like'){
      //save database !isLike
      this.isLike = !this.isLike;
      this.isDislike = false;
      if(this.isLike)
      {
        this.userReact.reaction='like'
      }else{
        this.userReact.reaction='undefined'
      }
    
    }
    if(s == 'dislike'){
       //save database !isDislike
       this.isDislike = !this.isDislike;
       this.isLike = false;
       if(this.isDislike)
       {
         this.userReact.reaction='dislike'
       }else{
         this.userReact.reaction='undefined'
       }
    }
    this.postApi.userReact(this.userReact)
    .subscribe((data)=>{
      this.getData();
    })
   
  }

}

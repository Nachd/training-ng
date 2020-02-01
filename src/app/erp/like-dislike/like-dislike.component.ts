import { Component, OnInit, Input } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  @Input() p;
  constructor() { }

  isLike = false;
  isDislike = false;
  nbr_like = 0;
  nbr_dislike = 0;
  ngOnInit() {
    // requete post id  , userid 
    //if undefined
    //if like => this.isLike = true;
    //if dislike => isDislike = true;

    this.getData();
  }

  getData(){
    //requete status
    //count like 
    //count dislike
  }
  changeStatus(s){
    if(s == 'like'){
      //save database !isLike
      this.isLike = !this.isLike;
      this.isDislike = false;
      if(this.isLike){
        this.nbr_like++;
      }else{
        this.nbr_like--;
      }
    }
    if(s == 'dislike'){
       //save database !isDislike
       this.isDislike = !this.isDislike;
       this.isLike = false;
    }
    this.getData();
  }

}

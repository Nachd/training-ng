import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { React } from '../viewModels/react';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private config : ConfigService , private http: HttpClient) { }

  url = this.config.hostname;


  getAllPosts(){

    return this.http.get(this.url+'/getPosts')
  }
  getReactsByPostId( postId){
    return this.http.get(this.url+'/getReactsByPostId/'+postId)
  }
  userReact(body : React){
    return this.http.post(this.url+'/saveReact' , body)
  }
}

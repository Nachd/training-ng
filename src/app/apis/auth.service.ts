import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../viewModels/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private config : ConfigService , private http : HttpClient) { }
  url = this.config.hostname;


  signup(body : User){

    return this.http.post(this.url+'/addUser' , body)
  }
  signin(email , password){
    let body={
      email : email , 
      password : password
    }
    return this.http.post(this.url+'/login' , body )
  }
}

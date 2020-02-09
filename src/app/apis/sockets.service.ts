import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketsService {


  private socket;

  uri = this.config.hostname;
  constructor(private config: ConfigService, private http: HttpClient) {
    this.socket = io(this.uri);

  }
  sendLoginNotif(id){
    this.socket.emit('login' , id);
  }

  sendNotif(data){
    console.log(data)
    this.socket.emit('notify' , data)
  }


public getNotifs = () => {
    return Observable.create((observer) => {
      
      this.socket.on('receiveNotif' , (message)=>{
   
        observer.next(message);
      })

    });
  }

}
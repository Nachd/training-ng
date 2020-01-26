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

  public getSocketFromServer = () => {
    return Observable.create((observer) => {

      this.socket.on('notif', (message) => {
        console.log(message)
        observer.next(message);
      });

      this.socket.on('chat', (message) => {
        console.log(message)
        observer.next(message);
      });

    })
  }

  public sendNotif(body : any) {
    
    this.socket.emit('new-request' , body)
  }
}
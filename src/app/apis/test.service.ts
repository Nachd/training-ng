import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Request } from '../viewModels/request';
import { SocketsService } from './sockets.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient , private config : ConfigService , private socketService : SocketsService) { }
url = this.config.hostname;
  getAll(){
    return this.http.get(this.url + 'voucher-status');
  }

  sendRequest(body : Request){
    this.socketService.sendNotif(body)
    return this.http.post(this.url+'/addrequest' , body)

  }

  getAllRequests(){
    return this.http.get(this.url+'/allrequests')
  }


  sendmailService(emaill , contentt){
    let body = {
      email : emaill,
      content : contentt
    }
    return this.http.post(this.url+'/sendmail' ,body)
  }
}

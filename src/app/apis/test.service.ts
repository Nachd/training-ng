import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Request } from '../viewModels/request';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient , private config : ConfigService) { }
url = this.config.hostname;
  getAll(){
    return this.http.get(this.url + 'voucher-status');
  }

  sendRequest(body : Request){
    return this.http.post(this.url+'/addrequest' , body)
  }
}

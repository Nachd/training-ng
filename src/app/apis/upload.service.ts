import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient , private config : ConfigService) { }


  uploadFiles(a){
   return  this.http.post(this.config.hostname + '/upload', a)
    
  }
}

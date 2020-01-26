import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/apis/test.service';
import { Request } from 'src/app/viewModels/request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private requestApis : TestService) { }

  requests : Request[];
  req_copy : Request[];
  ngOnInit() {

    this.requestApis.getAllRequests()
    .subscribe((data : Request[])=>{
      this.requests = data;
      this.req_copy = this.requests

      this.requests.map((element , i)=>{

      })

      //
    },error=>{
        
    })
  }

  search(value){
    this.requests = this.req_copy.filter((r)=>
     r.subject.indexOf(value) >-1 ||
     r.content.indexOf(value) >-1 ||
     r.userId.firstName.indexOf(value) >-1 ||
     (r.statusId && r.statusId.type.indexOf(value) >-1) 
     )
  }

  sort_subjects(){

    this.requests= this.requests.sort((a , b )=> a > b ? 0 : -1)
  }

}

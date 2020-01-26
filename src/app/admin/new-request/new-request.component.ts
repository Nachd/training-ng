import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/viewModels/request';
import Swal from 'sweetalert2';
import { TestService } from 'src/app/apis/test.service';
import { RequestType } from 'src/app/viewModels/request-type';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  constructor(private requestApi : TestService) { }

  request : Request = new Request();
  ngOnInit() {
  
  
  }

  send(){

    this.requestApi.sendRequest(this.request)
    .subscribe((success)=>{
      Swal.fire('saved' , '' , 'success')
      this.request = new Request();
    } , error=>{

    })
   
  }

}

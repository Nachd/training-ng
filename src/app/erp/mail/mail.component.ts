import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/apis/test.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private testApi : TestService) { }
  email; content;
  ngOnInit() {
  }

  send(){
    this.testApi.sendmailService(this.email , this.content)
    .subscribe((success)=>{
      Swal.fire('Email sent' , JSON.stringify(success) , 'success' )
    })
  }
}

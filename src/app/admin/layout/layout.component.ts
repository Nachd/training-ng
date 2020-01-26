import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { User } from 'src/app/viewModels/user';
import { TestService } from 'src/app/apis/test.service';
import { SocketsService } from 'src/app/apis/sockets.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public translate: TranslateService ,
     private router : Router,
     private socketService : SocketsService,
     private testApi : TestService) { }
user : User
notifs : any[]=[];
  ngOnInit() {
    
    this.socketService
    .getSocketFromServer()
    .subscribe((data: any) => {
     this.notifs.push(data)
     //
    })
    
    this.testApi.getAll()
    .subscribe(
      (s : any)=>{
        console.log(s)
      },
      (e)=>{

      }
    )
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
    }else{
      this.router.navigate(['/register'])
    }
  }
  changeLang(val) {
    this.translate.use(val)
    localStorage.setItem('l' , val)
  }
}

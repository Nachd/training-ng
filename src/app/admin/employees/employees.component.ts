import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TestService } from 'src/app/apis/test.service';
import { User } from 'src/app/viewModels/user';
import { SocketsService } from 'src/app/apis/sockets.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit , OnChanges , OnDestroy {
  ngOnDestroy(): void {
   console.log("employees destroyed")
  }
  

  constructor(private userService : TestService , private notifApis : SocketsService) { }

  @Input() keyword : string;
  @Input() result : any[];
  @Output() update : EventEmitter<any> = new EventEmitter();
   items : any[] = [
    {id : 1 , name:'test' , cin : '0101010101'},
    {id : 2 , name:'test2' , cin : '7101010101'},
    {id : 3 , name:'test3' , cin : '8101010101'}
  ]

  users : User[];
  ngOnInit() {
    console.log(this.keyword)
    this.userService.getAllUsers()
    .subscribe((data : User[])=>{
      this.users = data
    })
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.keyword)
  //  this.result = [];
   this.items.map((p)=>{
     if(p.name.indexOf(this.keyword)>-1 ||p.cin.indexOf(this.keyword)>-1){
       this.result.push({text : p.name , link : "/employee/"+p.id})
     }
     this.update.emit()
   })
  
  }
  sendNotif(id){
    let notif={
      Content : 'new notif',
      ToUserId : id,
      Link : '/path/'
    }
this.notifApis.sendNotif(notif)
  }
}

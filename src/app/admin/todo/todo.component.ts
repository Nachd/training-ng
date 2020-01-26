import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Todo } from 'src/app/viewModels/todo';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  ch : Todo = new Todo();
  tab : Todo[] = [];
  selectedItem : Todo;
  ngOnInit() {
  }

  save(){
    
    this.ch._id = this.tab.length+'';
    this.tab.push(this.ch);
    this.ch=new Todo();
  }

  done(id){

    this.tab.map((t , i)=>{
      if(t._id == id){
        this.tab[i].isDone = true;
      }
    })
  }

  select(t){
    this.selectedItem = t;
  }

  update(){
    Swal.fire('title','','success')
  }
  delete(){

  }
}

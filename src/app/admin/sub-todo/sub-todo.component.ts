import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-todo',
  templateUrl: './sub-todo.component.html',
  styleUrls: ['./sub-todo.component.css']
})
export class SubTodoComponent implements OnInit {

  constructor() { }
  @Input() item;
  @Output() handler: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  send() {
    this.handler.emit();
  }
}

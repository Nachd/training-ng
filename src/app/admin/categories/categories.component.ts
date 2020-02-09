import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  @Input() keyword : string;
  items : any[] = [
    {id : 1 , name:'test' , date : new Date()},
    {id : 2 , name:'test2' , date : new Date()},
    {id : 3 , name:'test3' , date : new Date()}
  ]
  ngOnInit() {
  }

}

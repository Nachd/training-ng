import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {

  constructor() { }
  posts = [1 ,2 , 3 , 4 ]
  ngOnInit() {
  }

}

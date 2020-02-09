import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor() { }

  @Input() keyword : string;
  items : any[] = [
    {id : 1 , name:'test' , city : 'Sousse'},
    {id : 2 , name:'test2' , city : 'Sousse'},
    {id : 3 , name:'test3' , city : 'Tunisia'}
  ]
  ngOnInit() {
  }

}

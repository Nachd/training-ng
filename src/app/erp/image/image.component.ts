import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  image
  upload(evt){
    var files = evt.target.files;
    var file = files[0];
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }}
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
         this.image= 'data:image/png;base64,'+btoa(binaryString);
         console.log(this.image)
   }


}

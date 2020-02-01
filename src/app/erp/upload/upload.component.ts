import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UploadService } from 'src/app/apis/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private uploadApis : UploadService) { }
  uploadedFiles: any[];
  ngOnInit() {
  }

  loadFiles(evt){
    this.uploadedFiles = evt.target.files;

  }
  upload() {
    let formData = new FormData();
    if (this.uploadedFiles.length > 0) {
      //body
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      }

      this.uploadApis.uploadFiles(formData)
      .subscribe((response) => {
        console.log('response received is ', response);
  
        //form.file = response;
        //save form
      })
    }else{
      Swal.fire('nothing to upload' , '' , 'error')
    }
  }

}

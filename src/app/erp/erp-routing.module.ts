import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpComponent } from './erp/erp.component';
import { UploadComponent } from './upload/upload.component';
import { MailComponent } from './mail/mail.component';
import { ImageComponent } from './image/image.component';
import { ModalComponent } from './modal/modal.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';


const routes: Routes = [
  {
    path: '',
    component: ErpComponent,
    children: [
      {
        path : 'upload',
        component : UploadComponent
      },
      {
        path : 'mail',
        component : MailComponent
      }, {
        path : 'picture',
        component : ImageComponent
      }, {
        path : 'like',
        component : LikeDislikeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErpRoutingModule { }

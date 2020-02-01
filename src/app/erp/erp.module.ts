import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing.module';
import { UploadComponent } from './upload/upload.component';
import { ErpComponent } from './erp/erp.component';
import { MailComponent } from './mail/mail.component';
import { ImageComponent } from './image/image.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';


@NgModule({
  declarations: [UploadComponent, ErpComponent, MailComponent, ImageComponent, ModalComponent, LikeDislikeComponent],
  imports: [
    CommonModule,
    ErpRoutingModule,
    FormsModule
  ]
})
export class ErpModule { }

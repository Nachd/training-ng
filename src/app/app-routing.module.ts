import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { TodoComponent } from './admin/todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { NewRequestComponent } from './admin/new-request/new-request.component';
import { RequestsComponent } from './admin/requests/requests.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
        path: 'todo',
        component: TodoComponent
      }, {
        path: 'requests',
        component: RequestsComponent
      }, {
        path: 'new-request',
        component: NewRequestComponent
      }
    ]
  },
  {
    path : 'register',
    component : RegisterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

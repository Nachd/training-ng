import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { TodoComponent } from './admin/todo/todo.component';
import { NewRequestComponent } from './admin/new-request/new-request.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PlacesComponent } from './admin/places/places.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  
    children: [
      {
        path: 'todo',
        component: TodoComponent
      }, {
        path: 'requests',
        component: RequestsComponent
      }, {
        path: 'new-request',
        component: NewRequestComponent
      }, {
        path: 'edit-request/:id',
        component: NewRequestComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'places',
        component: PlacesComponent
      }
    ]
  },

  {
    path: 'erp',
    loadChildren: './erp/erp.module#ErpModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';   
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { TodoComponent } from './admin/todo/todo.component';
import { SubTodoComponent } from './admin/sub-todo/sub-todo.component';
import { NewRequestComponent } from './admin/new-request/new-request.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { PlacesComponent } from './admin/places/places.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TodoComponent,
    SubTodoComponent,
    NewRequestComponent,
    RequestsComponent,
    EmployeesComponent,
    CategoriesComponent,
    PlacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

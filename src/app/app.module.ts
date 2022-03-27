import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { TemplateTodoComponent } from './_template/template-todo/template-todo.component';
import { TemplateTodoFormComponent } from './_template/template-todo-form/template-todo-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriberComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

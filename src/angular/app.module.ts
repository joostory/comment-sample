import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app.component.js';
import { CommentFormComponent }  from './components/comment-form.component.js';
import { CommentService } from './components/comment.service.js'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CommentFormComponent ],
  bootstrap: [ AppComponent ],
  providers: [ CommentService ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Comment } from './comment.js'
import { CommentService } from './comment.service.js'

@Component({
  selector: 'comment-form',
  template: `
    <form class="form" (submit)="onAdd(message)">
      <label>message</label>
      <input [(ngModel)]="message" name="message" class="text" type='text' />
      <button type='submit'>submit</button>
    </form>
  `,
})
export class CommentFormComponent {

  message: string = "";

  constructor(private commentService: CommentService) { }

  onAdd(message: string) {
    this.commentService.addComment(message);
    this.message = "";
  }
}

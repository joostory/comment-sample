import { Component, OnInit } from '@angular/core';
import { Comment } from './comment.js'
import { CommentService } from './comment.service.js'

@Component({
  selector: 'comment-app',
  template: `
  <div class="app">
    <div>{{count}} Comments</div>

    <button *ngIf="hasMore" class="btn-more" (click)="onLoadMore()">more comment</button>

    <div *ngFor="let comment of comments">
      <div class="comment">
        <div class="info">{{comment.created}}</div>
        <div class="message">{{comment.message}}</div>
      </div>
    </div>

    <comment-form></comment-form>
  </div>
  `,
})
export class AppComponent implements OnInit {
  count = 6;
  hasMore = true;
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() { this.getComments() }

  getComments() {
    this.comments = this.commentService.getComments();
    this.count = this.commentService.getCommentCount();
    this.hasMore = this.count !== this.comments.length;
  }

  onLoadMore() {
    this.commentService.loadMoreComments();
    this.getComments();
  }
}

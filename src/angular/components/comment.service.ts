import { Injectable } from '@angular/core';

import { Comment } from './comment.js'

@Injectable()
export class CommentService {

  count: number = 6;
  hasMore: any = true;
  comments: Comment[] = [
    {id: 5, message:'Comment 5', created: new Date(new Date().getTime() - 600000)},
    {id: 6, message:'Comment 6', created: new Date(new Date().getTime() - 500000)}
  ];

  getCommentCount(): number {
    return this.count
  }

  getComments(): Comment[] {
    return this.comments
  }

  loadMoreComments(): void {
    this.comments = [
      {id: 1, message: 'Comment 1', created: new Date(new Date().getTime() - 1000000)},
      {id: 2, message: 'Comment 2', created: new Date(new Date().getTime() - 900000)},
      {id: 3, message: 'Comment 3', created: new Date(new Date().getTime() - 800000)},
      {id: 4, message: 'Comment 4', created: new Date(new Date().getTime() - 700000)},
      ...this.comments
    ];
  }

  addComment(message: string): void {
    this.comments.push({
      id: this.count + 1,
      message: message,
      created: new Date()
    });
    this.count++;
  }
}
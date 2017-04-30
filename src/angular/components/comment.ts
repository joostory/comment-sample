export class Comment {
  id: number;
  message: string;
  created: any;

  constructor(id: number, message: string, created: any) {
    this.id = id;
    this.message = message;
    this.created = created;
  }
}

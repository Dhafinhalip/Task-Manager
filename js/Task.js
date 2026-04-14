export class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "pending";
    this.date = new Date().toLocaleDateString("id-ID");
  }
}

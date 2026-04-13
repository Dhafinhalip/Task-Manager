export class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "belum selesai";
    this.date = new Date().toLocaleDateString("id-ID");
  }
}

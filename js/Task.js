export class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.status = "Belum Selesai";
    this.date = new Date().toLocaleDateString("id-ID");
  }
}

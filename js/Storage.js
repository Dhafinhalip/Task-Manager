export class Storage {
  static getTask() {
    return JSON.parse(localStorage.getItem("task")) || [];
  }

  static saveTask(tasks) {
    localStorage.setItem("task", JSON.stringify(tasks));
  }

  static addTask(task) {
    const tasks = this.getTask();
    tasks.push(task);
    this.saveTask(tasks);
  }

  static deleteTask(id) {
    const undelete = this.getTask().filter((item) => item.id !== id);
    this.saveTask(undelete);
  }

  static updateStatusTask(id) {
    const tasks = this.getTask();
    const index = tasks.findIndex((item) => item.id === id);

    if (index === -1) return;

    tasks[index].status = "Selesai";
    this.saveTask(tasks);
  }
}

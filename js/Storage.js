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

  static toggleStatusTask(id) {
    const tasks = this.getTask();

    const update = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === "completed" ? "pending" : "completed",
        };
      }
      return task;
    });
    this.saveTask(update);
  }
}

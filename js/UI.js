export class UI {
  static renderListTask(tasks) {
    const list = document.querySelector(".task-list");
    list.innerHTML = "";
    tasks.forEach((t) => {
      list.innerHTML += `
        <li data-id="${t.id}" class="${t.status === "completed" ? "completed" : ""}">
          <span>${t.title}</span>
          <div class="actions">
            <button class="btn btn-toggle">
              ${t.status === "completed" ? "Undo" : "Done"}
            </button>
            <button class="btn btn-delete">Hapus</button>
          </div>
        </li>
      `;
    });
  }

  static renderStatistic(tasks) {
    const totalTask = document.getElementById("total-task");
    const complete = document.getElementById("completed-task");
    const pending = document.getElementById("pending-task");

    //Filter Complete And Pending
    const completeCount = tasks.filter((c) => c.status === "selesai").length;

    totalTask.textContent = `Total: ${tasks.length}`;
    complete.textContent = `Selesai: ${completeCount}`;
    pending.textContent = `Belum: ${tasks.length - completeCount}`;
  }

  static clearForm() {
    document.getElementById("task-form").reset();
  }

  static filterTask(tasks, type) {
    if (type === "completed") {
      return tasks.filter((c) => c.status === "completed");
    }

    if (type === "pending") {
      return tasks.filter((c) => c.status === "pending");
    }

    return tasks;
  }
}

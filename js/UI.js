export class UI {
  static renderListTask(tasks) {
    const list = document.querySelector(".task-list");
    list.innerHTML = "";
    tasks.forEach((t) => {
      list.innerHTML += `
        <li data-id="${t.id}">
         <input type="checkbox"/>
         <label for="item1">${t.title}</label><br />
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

  static filterTask(tasks) {
    this.renderListTask(tasks);
    const completeBtn = document.querySelector(
      "button[data-filter = 'completed']",
    );
    const pendingBtn = document.querySelector(
      "button[data-filter = 'pending']",
    );

    completeBtn.addEventListener("click", function () {
      const filterCompleted = tasks.filter((c) => c.status === "selesai");
      UI.renderListTask(filterCompleted);
    });

    pendingBtn.addEventListener("click", function () {
      const filterPending = tasks.filter((c) => c.status === "Belum Selesai");
      UI.renderListTask(filterPending);
    });
  }
}

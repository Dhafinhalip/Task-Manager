export class UI {
  static renderListTask(tasks) {
    const list = document.querySelector(".task-list");
    list.innerHTML = "";
    tasks.forEach((t) => {
      list.innerHTML = `
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
}

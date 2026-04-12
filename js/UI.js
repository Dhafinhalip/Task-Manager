export class UI {
  static renderListTask(tasks) {
    const list = document.querySelector(".task-list");
    list.innerHTML = "";
    tasks.forEach((t) => {
      list.innerHTML = `
        <li data-id="${t.id}">
          <span>${t.title}</span>
          <span>${t.status}</span>
        </li>
      `;
    });
  }
}

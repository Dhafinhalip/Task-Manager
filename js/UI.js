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
}

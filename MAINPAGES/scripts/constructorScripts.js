// Скрипты файлов проектанту

document.addEventListener("DOMContentLoaded", function() {
        const columns = document.querySelectorAll(".kanban-column");

        columns.forEach(column => {
            const taskList = column.querySelector(".task-list");
            const taskCountElement = column.querySelector(".task-count");

            taskCountElement.textContent = taskList.children.length;
        });
    });

// Скрипты Открытия задач

document.addEventListener("DOMContentLoaded", function() {
    const taskItems = document.querySelectorAll(".task-item");
    const taskInfo = document.querySelector(".task-info");
    const taskInfoTitle = taskInfo.querySelector("h4");

    taskItems.forEach(item => {
        item.addEventListener("click", function() {
            taskItems.forEach(task => {
                task.classList.remove("active");
            });

            const taskTitle = this.textContent.trim();
            taskInfoTitle.textContent = taskTitle;
            taskInfo.classList.add("active");
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const taskInfo = document.querySelector(".task-info");
    const taskInfoTitle = taskInfo.querySelector("h4");

    // Создание экземпляров Sortable для каждого списка задач
    new Sortable(document.getElementById("todo-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    new Sortable(document.getElementById("inprogress-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    new Sortable(document.getElementById("done-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    // Обновление счетчика задач в каждом столбце
    function updateTaskCount() {
        const todoCount = document.querySelectorAll("#todo-list .task-item").length;
        const inProgressCount = document.querySelectorAll("#inprogress-list .task-item").length;
        const doneCount = document.querySelectorAll("#done-list .task-item").length;

        document.querySelector(".column-title:nth-child(1) .task-count").textContent = todoCount;
        document.querySelector(".column-title:nth-child(2) .task-count").textContent = inProgressCount;
        document.querySelector(".column-title:nth-child(3) .task-count").textContent = doneCount;
    }

    // Обработчик клика на задачу
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach(item => {
        item.addEventListener("click", function() {
            taskItems.forEach(task => {
                task.classList.remove("active");
            });

            const taskTitle = this.textContent.trim();
            taskInfoTitle.textContent = taskTitle;
            taskInfo.classList.add("active");
            this.classList.add("active");

            if (taskInfo.classList.contains("active")) {
                taskInfo.classList.remove("active");
            } else {
                taskInfo.classList.add("active");
            }
        });
    });
});
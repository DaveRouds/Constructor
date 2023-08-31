// const widget = document.getElementById('draggable-widget');
// const header = widget.querySelector('.widget-header');
// const closeButton = widget.querySelector('.close-button');

// let isDragging = false;
// let offsetX, offsetY;

// header.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.clientX - widget.getBoundingClientRect().left;
//   offsetY = e.clientY - widget.getBoundingClientRect().top;
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;

//   const newX = e.clientX - offsetX;
//   const newY = e.clientY - offsetY;

//   widget.style.left = `${newX}px`;
//   widget.style.top = `${newY}px`;
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// closeButton.addEventListener('click', () => {
//   widget.style.display = 'none';
// });

// const resizer = document.getElementById('resizable-widget');
// const resizeIcons = resizer.querySelectorAll('.resize-icon');

// resizer.addEventListener('mouseenter', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 1;
//   });
// });

// resizer.addEventListener('mouseleave', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 0;
//   });
// });
//изминение размера виджета при открытии нового

// function openNewWidget() {
//   const widgetContainer = document.querySelector('.widget-container');
//   const newWidget = document.createElement('div');
//   newWidget.className = 'resizable-widget active-widget';
//   newWidget.innerHTML = '<!-- ... Внутренности нового виджета ... -->';

//   widgetContainer.appendChild(newWidget);

//   const activeWidgets = document.querySelectorAll('.active-widget');
//   const widgetWidthPercentage = 100 / (activeWidgets.length);

//   activeWidgets.forEach((widget, index) => {
//     widget.style.width = `${widgetWidthPercentage}%`;
//     widget.style.transform = `translateX(${index * widgetWidthPercentage}%)`;
//   });
// }

// Размер виджета
function setupWidget(widgetId) {
  const widget = document.getElementById(widgetId);
  const resizeHandle = widget.querySelector('.resize-handle');
  
  const widgetHeader = widget.querySelector('.widget-header');
  const closeButton = widget.querySelector('.close-button');

  let isResizing = false;
  let originalWidth, originalHeight;
  let isDragging = false;
  let initialX, initialY; // Initial cursor position for dragging
  let initialResizeX, initialResizeY; // Initial cursor position for resizing

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    originalWidth = widget.offsetWidth;
    originalHeight = widget.offsetHeight;
    initialResizeX = e.clientX;
    initialResizeY = e.clientY;
    e.preventDefault();
  });

  widgetHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - parseFloat(getComputedStyle(widget).left); // Store initial cursor position for dragging
    initialY = e.clientY - parseFloat(getComputedStyle(widget).top); // Store initial cursor position for dragging
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (isResizing) {
      const newWidth = originalWidth + (e.clientX - initialResizeX);
      const newHeight = originalHeight + (e.clientY - initialResizeY);
      widget.style.width = `${newWidth}px`;
      widget.style.height = `${newHeight}px`;
    } else if (isDragging) {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      widget.style.left = `${newX}px`;
      widget.style.top = `${newY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isResizing = false;
    isDragging = false;
  });

  closeButton.addEventListener('click', () => {
    widget.style.display = 'none';
  });
}

const widgetIds = ['widget1', 'widget2', 'widget3', 'widgetChat'];

widgetIds.forEach(widgetId => {
  setupWidget(widgetId);
});

// Панель виджетов
const widgetIcons = document.querySelectorAll('.func');
const widgets = document.querySelectorAll('.resizable-widget');

widgetIcons.forEach(icon => {
  const widgetId = icon.getAttribute('data-widget');
  const widget = document.getElementById(widgetId);

  icon.addEventListener('click', () => {
    if (widget.style.display === 'none' || widget.style.display === "") {
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  });
});

const widgetButtons = document.querySelectorAll('.widget-header button');

widgetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const widgetContainer = button.closest('.widget-container');
    const widgets = widgetContainer.querySelectorAll('.resizable-widget');

    widgets.forEach(widget => {
      widget.classList.remove('active-widget');
    });

    const widget = button.closest('.resizable-widget');
    widget.classList.add('active-widget');
  });
});

const buttons = document.querySelectorAll('.func');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('activeButton')) {
      button.classList.remove('activeButton');
    } else {
      button.classList.add('activeButton');
    }
  });
});

//чат

function setupChatWidget() {
  const chatWidgetContainer = document.querySelector('.chat-widget-container');
  const chatWidget = chatWidgetContainer.querySelector('.chat-widget');
  const chatWidgetToggle = chatWidgetContainer.querySelector('.chat-widget-toggle');
  const closeButton = chatWidget.querySelector('.close-button-chat');

  chatWidgetToggle.addEventListener('click', () => {
    chatWidget.style.display = 'block';
    chatWidgetToggle.style.display = 'none'; // Скрываем иконку
  });

  // closeButton.addEventListener('click', () => {
  //   chatWidget.style.display = 'none';
  //   chatWidgetToggle.style.display = 'block'; // Показываем иконку
  // });
}
setupChatWidget();
// function setupChatMover(chatWidgetId) {
//   const chatWidget = document.getElementById(chatWidgetId);
//   const chatHeader = chatWidget.querySelector('.chat-header');
  
//   let isDragging = false;
//   let initialX, initialY;
//   let initialLeft, initialTop;

//   chatHeader.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     initialX = e.clientX;
//     initialY = e.clientY;
//     initialLeft = parseFloat(getComputedStyle(chatWidget).left);
//     initialTop = parseFloat(getComputedStyle(chatWidget).top);
//     e.preventDefault();
//   });
  
//   document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//       const deltaX = e.clientX - initialX;
//       const deltaY = e.clientY - initialY;
//       chatWidget.style.left = `${initialLeft + deltaX}px`;
//       chatWidget.style.top = `${initialTop + deltaY}px`;
//     }
//   });
  
//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//   });
// }
// const chatWidgetId = 'draggableHeader'; // Замените на ID вашего чат-виджета
// setupChatMover(chatWidgetId);
// Вызов функции для настройки перемещения чата




//симуляция чата
// document.addEventListener("DOMContentLoaded", function () {
//   const chatContent = document.querySelector(".chat-content");
//   const messageInput = document.getElementById("messageInput");
//   const sendButton = document.getElementById("sendButton");

//   sendButton.addEventListener("click", sendMessage);

//   function sendMessage() {
//     const messageText = messageInput.value.trim();
//     if (messageText !== "") {
//       addMessage("user", messageText); // Отправляем сообщение пользователя
//       messageInput.value = "";
//       simulateResponse(); // Симулируем получение ответа
//     }
//   }

//   function addMessage(sender, message) {
//     const messagesList = chatContent.querySelector(".messages-list");
//     const messageElement = document.createElement("li");
//     messageElement.classList.add("message", sender);
//     messageElement.textContent = message;
//     messagesList.appendChild(messageElement);
//     chatContent.scrollTop = chatContent.scrollHeight; // Прокручиваем вниз для отображения последнего сообщения
//   }

//   function simulateResponse() {
//     setTimeout(function () {
//       addMessage("bot", "Привет! Как я могу помочь вам?"); // Симулируем ответ бота
//     }, 1000); // Задержка для эмуляции ответа
//   }
// });

//боковая панель у главного виджета ежедневник
const panelTitle = document.getElementById('panelTitle');
const panelContent = document.getElementById('panelContent');
const tableRows = document.querySelectorAll('.widget-table tbody tr');
const widgetTextColumn = document.getElementById('widgetTextColumn');

// Обработчики событий для каждой строки таблицы
tableRows.forEach((row, index) => {
  row.addEventListener('click', () => {
    if (widgetTextColumn.style.display === 'block') {
      // Если панель открыта и была нажата та же строка, закрываем панель
      widgetTextColumn.style.display = 'none';
    } else {
      // Иначе, отображаем панель и обновляем данные
      handleRowClick(index);
      const rowData = getRowData(index);
      panelTitle.textContent = rowData.title;
      panelContent.textContent = rowData.content;
      row.classList.add('selected-row');
    }
  });
});


function getRowData(index) {
  // Возвращаем данные в зависимости от индекса строки
  if (index === 0) {
    return {
      title: 'Заголовок для первой строки',
      content: 'Содержимое первой строки...'
    };
  } else if (index === 1) {
    return {
      title: 'Заголовок для второй строки',
      content: 'Содержимое второй строки...'
    };
  }
  // И так далее...
}

const rowStates = {};

// Функция для обработки нажатия на строку
function handleRowClick(index) {
  // Скрываем все открытые панели
  for (const stateIndex in rowStates) {
    if (rowStates[stateIndex]) {
      rowStates[stateIndex] = false;
    }
  }
  
  // Отображаем панель и меняем состояние на true
  widgetTextColumn.style.display = 'block';
  rowStates[index] = true;
}
$(document).ready(function() {
  $('.clickable-cell').click(function() {
    // Очистка содержимого выпадающей таблицы
    $('#dropdownTable').empty();

    // Получение содержимого ячеек строки
    var cells = $(this).parent().children();
    var rowContent = '';
    cells.each(function() {
      rowContent += '<td>' + $(this).text() + '</td>';
    });

    // Добавление строки в выпадающую таблицу
    $('#dropdownTable').append('<tr>' + rowContent + '</tr>');

    // Позиционирование и отображение выпадающей таблицы
    var dropdownContainer = $('#dropdownTableContainer');
    dropdownContainer.css('display', 'block');
    dropdownContainer.offset({ top: $(this).offset().top + $(this).outerHeight(), left: $(this).offset().left });
  });
});


$(document).ready(function() {
  $('.workshop-title1').click(function() {
    $(this).toggleClass('active');
    $(this).next('.projects1').slideToggle();
  });

  $('.projects_name_list').click(function() {
    $(this).toggleClass('active');
    $(this).next('.sub-projects1').slideToggle();
  });

  $('.TaskWorkShopTask.tasks_name_list').click(function() {
    $(this).toggleClass('active');
    $(this).next('.sub-task-projects1').slideToggle();
  });

  // И так далее...
});
//Сортировка 

// Ежедневник

// План выполнения


const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  const subProjects = project.querySelectorAll('.sub-projects');
  subProjects.forEach((subProject)=>{
    var sum = 0;
    var count = 0;
    var tbodyTest = subProject.querySelector('tbody');
    var tbodyTr = tbodyTest.querySelectorAll('tr');
    tbodyTr.forEach((indivTr) =>{
      var progressBar = indivTr.querySelector("#progressBar");
      var progressValue = indivTr.querySelector("#progressValue");
      // Получаем заданное значение прогресса из span
      var value = parseInt(progressValue.innerText, 10);
      sum += value;
      count++;
    
      // Устанавливаем значение атрибута value элемента progress
      progressBar.value = value;

    })

    var progressWhole = project.querySelector('#progressWhole');

    // Вычисляем среднее значение
    var average = Math.round(sum / count,0);

    // Устанавливаем среднее значение в атрибут value элемента progress
    progressWhole.value = average;

    project.addEventListener('click', () => {
      subProject.classList.toggle('active');
    });
  })

});

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

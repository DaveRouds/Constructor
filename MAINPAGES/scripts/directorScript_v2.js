
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

const widgetIds = ['widget1', 'widget2', 'widget3'];

widgetIds.forEach(widgetId => {
  setupWidget(widgetId);
});

// // Панель виджетов
// const widgetIcons = document.querySelectorAll('.func');
// const widgets = document.querySelectorAll('.resizable-widget');
//
// widgetIcons.forEach(icon => {
//   const widgetId = icon.getAttribute('data-widget');
//   const widget = document.getElementById(widgetId);
//
//   icon.addEventListener('click', () => {
//     if (widget.style.display === 'none' || widget.style.display === "") {
//       widget.style.display = 'block';
//     } else {
//       widget.style.display = 'none';
//     }
//   });
// });
//
// const widgetButtons = document.querySelectorAll('.widget-header button');
//
// widgetButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const widgetContainer = button.closest('.widget-container');
//     const widgets = widgetContainer.querySelectorAll('.resizable-widget');
//
//     widgets.forEach(widget => {
//       widget.classList.remove('active-widget');
//     });
//
//     const widget = button.closest('.resizable-widget');
//     widget.classList.add('active-widget');
//   });
// });
//
// const buttons = document.querySelectorAll('.func');
//
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.classList.contains('activeButton')) {
//       button.classList.remove('activeButton');
//     } else {
//       button.classList.add('activeButton');
//     }
//   });
// });


//чат



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

// скрипт выбора элементов в выпадающем меню
// Находим выпадающий список
const widgetSelect = document.getElementById('widget-select');

// Добавляем обработчик события при изменении значения выпадающего списка
widgetSelect.addEventListener('change', function () {
  const selectedWidget = widgetSelect.value;

  // Находим выбранное окно
  const selectedWidgetElement = document.getElementById(selectedWidget);

  // Проверяем, если окно уже отображается, то скрываем его, иначе отображаем

  if (selectedWidgetElement.style.display === 'none' || selectedWidgetElement.style.display === '') {
    selectedWidgetElement.style.display = 'block';
  }
});



////////////////////////////
// // Получаем все виджеты
// const widgets = document.querySelectorAll('.resizable-widget');
//
// // Добавляем обработчик клика для каждого виджета
// widgets.forEach(widget => {
//   widget.addEventListener('click', () => {
//     // Удаляем класс "active-widget" у всех виджетов
//     widgets.forEach(w => {
//       w.classList.remove('active-widget');
//     });
//     // Добавляем класс "active-widget" только к кликнутому виджету
//     widget.classList.add('active-widget');
//
//     // Устанавливаем z-index активного виджета выше других
//     widget.style.zIndex = '2';
//   });
// });



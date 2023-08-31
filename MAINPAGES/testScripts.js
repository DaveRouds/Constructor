function setupChatWidget() {
  const chatWidgetContainer = document.querySelector('.chat-widget-container');
  const chatWidget = chatWidgetContainer.querySelector('.chat-widget');
  const chatWidgetToggle = chatWidgetContainer.querySelector('.chat-widget-toggle');
  const closeButton = chatWidget.querySelector('.close-button');

  chatWidgetToggle.addEventListener('click', () => {
    chatWidget.style.display = 'block';
    chatWidgetToggle.style.display = 'none'; // Скрываем иконку
  });

  closeButton.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    chatWidgetToggle.style.display = 'block'; // Показываем иконку
  });
}
setupChatWidget();

function setupChatMover(chatWidgetId) {
  const chatWidget = document.getElementById(chatWidgetId);
  const chatHeader = chatWidget.querySelector('.chat-header');
  
  let isDragging = false;
  let initialX, initialY;
  
  chatHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX - parseFloat(getComputedStyle(chatWidget).left);
    initialY = e.clientY - parseFloat(getComputedStyle(chatWidget).top);
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const newX = e.clientX - initialX;
      const newY = e.clientY - initialY;
      chatWidget.style.left = `${newX}px`;
      chatWidget.style.top = `${newY}px`;
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

const chatWidgetId = 'draggableHeader'; // Замените на ID вашего чат-виджета
setupChatMover(chatWidgetId);
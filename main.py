# from flask import Flask, render_template_string,render_template,send_file

# app = Flask(__name__)

# # Здесь вы можете изменить список страниц на свой список файлов
# pages = ['gog.html', 'buttonTest.html']


# @app.route('/')
# def index():
#     return render_template('forTest3.html', pages_list=pages)
# @app.route('/<filename>')
# def page(filename):
#     if filename in pages:
#         return send_file(filename)
#     else:
#         return "Страница не найдена", 404
# if __name__ == '__main__':
#     app.run(debug=True)

import webbrowser
import pyautogui
import os
import time

# Инициализация веб-драйвера
file_path = os.path.abspath("Mainpages/pages_v2/director.html")
webbrowser.open("file://" + file_path)

# Открытие веб-страницы

# buttons = driver.find_elements('css selector', '.vidgetLine button')
time.sleep(5)
def move_and_click(x, y):
    # Начальные координаты мыши
    start_x, start_y = pyautogui.position()

    # Количество шагов для плавного перемещения
    num_steps = 25

    # Симуляция плавного перемещения мыши и клика
    for step in range(1, num_steps + 1):
        # Вычисление текущих координат по шагу
        current_x = start_x + (x - start_x) * step / num_steps
        current_y = start_y + (y - start_y) * step / num_steps
        
        # Перемещение мыши
        pyautogui.moveTo(current_x, current_y)
        
        # Пауза для создания плавного движения
        time.sleep(0.0000001)  # Уменьшите эту паузу для более быстрой анимации
    
    # Клик мышью
    pyautogui.click()

    # Пауза 2 секунды перед следующим шагом
    time.sleep(2)

# Инициализация веб-драйвера и открытие браузера
# ... (ваш код инициализации драйвера)

# Вызов функции для разных координат
move_and_click(200, 100)
move_and_click(400, 100)
move_and_click(600, 100)
time.sleep(2)
pyautogui.click()
move_and_click(800, 270)
move_and_click(800, 350)
move_and_click(800, 375)
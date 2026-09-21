---
theme: default
title: "П032 — Photoshop: чистый объект для карточки"
aspectRatio: 16/9
lesson: P032
class: hx-cover
---

<img class="hx-cover-image" src="./images/P032-34.png" alt="Предметная композиция на светлом фоне">
<div class="hx-brand-lockup"><img src="./images/hexlet-logo.svg" alt="Логотип Хекслет Колледжа"></div>
<div class="hx-eyebrow" style="margin-top:42px">ПМ1 · Сканирование и обработка графической информации</div>
<div class="hx-cover-title">
  <div class="hx-eyebrow hx-accent">Занятие 32</div>
  <h1>Photoshop: чистый объект для карточки</h1>
  <p>Отделяем объект неразрушающе, проверяем край и готовим PNG для интерфейса.</p>
</div>
<div class="hx-footer"><div class="hx-footer-line">РО 1.1 · Web Design · 60 минут</div><div class="hx-slide-no">01</div></div>

---
layout: default
---

<div class="hx-eyebrow">Результат занятия</div>
<h1>Объект выдерживает смену фона и работает в web-card</h1>

<div class="p032-process">
  <div class="hx-card"><h3>Selection</h3><p>Автовыделение создаёт стартовую область, а не готовый край.</p></div>
  <div class="hx-card"><h3>Layer Mask</h3><p>Фон скрыт обратимо, исходные пиксели остаются доступными.</p></div>
  <div class="hx-card"><h3>Edge test</h3><p>Светлая и тёмная подложки показывают ореол и потерянные детали.</p></div>
  <div class="hx-card"><h3>PNG alpha</h3><p>Экспорт открыт отдельно и проверен внутри карточки.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Артефакты: редактируемый PSD + PNG с прозрачностью</div><div class="hx-slide-no">02</div></div>

---
layout: default
---

<div class="hx-eyebrow">Контекст использования</div>
<h1>Качество края проверяет интерфейс, а не шахматный фон Photoshop</h1>

<div class="p032-split">
  <img src="./images/P032-08.png" alt="Кожаная сумка на нейтральном фоне">
  <div class="hx-card">
    <div class="hx-callout">В карточке объект уменьшается, оказывается рядом с текстом и получает новый фон.</div>
    <ul>
      <li>силуэт остаётся узнаваемым;</li>
      <li>важные детали не исчезают;</li>
      <li>край не выдаёт старую подложку;</li>
      <li>масштаб поддерживает иерархию карточки.</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Production-готовность подтверждает конечный контекст</div><div class="hx-slide-no">03</div></div>

---
layout: default
---

<div class="hx-eyebrow">Анализ до выделения</div>
<h1>Тип границы определяет способ обработки</h1>

<div class="p032-pair">
  <div><img src="./images/P032-04.png" alt="Металлический чайник с чётким контуром"><h3>Hard edge</h3><p>Металл, пластик и упаковка требуют точного силуэта без размытой каймы.</p></div>
  <div><img src="./images/P032-22.png" alt="Сложенная вязаная ткань"><h3>Soft edge</h3><p>Ткань и волокна требуют естественного перехода и сохранения частичных деталей.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Одинаковая кисть не подходит разным материалам</div><div class="hx-slide-no">04</div></div>

---
layout: default
---

<div class="hx-eyebrow">Первичное выделение</div>
<h1>Select Subject экономит время, но край оценивает дизайнер</h1>

<div class="p032-split">
  <img src="./images/P032-01.png" alt="Керамическая кружка с ручкой">
  <div class="hx-card">
    <h2>Проверка после автодействия</h2>
    <ul>
      <li>сохранился ли просвет внутри ручки;</li>
      <li>не захвачен ли похожий по цвету фон;</li>
      <li>остались ли мелкие части силуэта;</li>
      <li>где алгоритм требует ручной правки.</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Автоматизация создаёт черновик, ответственность остаётся у автора</div><div class="hx-slide-no">05</div></div>

---
layout: default
---

<div class="hx-eyebrow">Неразрушающая работа</div>
<h1>Layer Mask отделяет решение «видно» от исходных пикселей</h1>

<div class="p032-process">
  <div class="hx-card"><h3>Белое</h3><p>Показывает содержимое слоя.</p></div>
  <div class="hx-card"><h3>Чёрное</h3><p>Скрывает участок без удаления пикселей.</p></div>
  <div class="hx-card"><h3>Серое</h3><p>Создаёт частичную прозрачность мягкого края.</p></div>
  <div class="hx-card"><h3>Проверка</h3><p>Маску можно отключить и вернуть потерянную деталь кистью.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Ластик усложняет исправление, маска сохраняет обратимость</div><div class="hx-slide-no">06</div></div>

---
layout: default
---

<div class="hx-eyebrow">Тест двух подложек</div>
<h1>Контрастный фон показывает то, что скрывал похожий</h1>

<div class="p032-pair">
  <div><img src="./images/P032-17.png" alt="Чёрная бутылка на сером фоне"><h3>Светлая подложка</h3><p>Выявляет тёмные остатки фона и грязь по контуру.</p></div>
  <div><img src="./images/P032-09.png" alt="Белый кроссовок на светлом фоне"><h3>Тёмная подложка</h3><p>Показывает светлый halo и слишком жёстко срезанные детали.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Ассет ненадёжен, если чисто выглядит только на одном фоне</div><div class="hx-slide-no">07</div></div>

---
layout: default
---

<div class="hx-eyebrow">Масштаб проверки</div>
<h1>100% показывает технику, размер карточки показывает результат</h1>

<div class="p032-split">
  <img src="./images/P032-15.png" alt="Очки с тонкой оправой и прозрачными линзами">
  <div class="hx-card">
    <h2>Два просмотра одной маски</h2>
    <p><strong>100%:</strong> ореол, потерянные пиксели, ступенчатый или чрезмерно мягкий край.</p>
    <p><strong>Web-card:</strong> узнаваемость силуэта, визуальный вес и отсутствие заметной грязи.</p>
    <div class="hx-callout">Микроретушь имеет смысл, когда исправляет наблюдаемую проблему.</div>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Конечный масштаб ограничивает бесконечную пиксельную правку</div><div class="hx-slide-no">08</div></div>

---
layout: default
---

<div class="hx-eyebrow">Контактная тень</div>
<h1>Тень объясняет опору и направление света</h1>

<div class="p032-process">
  <div class="hx-card"><h3>Direction</h3><p>Направление тени согласовано со светом на объекте.</p></div>
  <div class="hx-card"><h3>Contact</h3><p>Самая тёмная зона находится у точки опоры.</p></div>
  <div class="hx-card"><h3>Blur</h3><p>Мягкость увеличивается по мере удаления от объекта.</p></div>
  <div class="hx-card"><h3>Opacity</h3><p>Тень ощущается, но не становится главным эффектом карточки.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Если тень видна раньше объекта, её сила мешает задаче</div><div class="hx-slide-no">09</div></div>

---
layout: default
---

<div class="hx-eyebrow">PNG с alpha</div>
<h1>Экспорт проверяется как самостоятельный файл</h1>

<div class="p032-split">
  <img src="./images/P032-23.png" alt="Прозрачный стеклянный сосуд">
  <div class="hx-card">
    <ul>
      <li>PNG открыт отдельно от master.psd;</li>
      <li>в файл не встроена подложка;</li>
      <li>полупрозрачные участки сохранились;</li>
      <li>на новом фоне не появился ореол;</li>
      <li>размер подходит интерфейсу.</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Шахматный фон Photoshop не доказывает качество конечного файла</div><div class="hx-slide-no">10</div></div>

---
layout: default
---

<div class="hx-eyebrow">Показ преподавателя · 0–12 минут</div>
<h1>Вся цепочка видна в одном рабочем файле</h1>

<div class="p032-strip">
  <div class="hx-card"><img src="./images/P032-14.png" alt="Деревянная игрушка с простым силуэтом"><h3>1 · Анализ</h3><p>Назвать hard и soft edge, сохранить важные детали.</p></div>
  <div class="hx-card"><img src="./images/P032-05.png" alt="Наушники на контрастном фоне"><h3>2 · Mask</h3><p>Выделить объект и превратить область в Layer Mask.</p></div>
  <div class="hx-card"><img src="./images/P032-16.png" alt="Чёрный зонт на сером фоне"><h3>3 · Test</h3><p>Проверить светлую и тёмную подложки.</p></div>
  <div class="hx-card"><img src="./images/P032-28.png" alt="Керамический сосуд с контактной тенью"><h3>4 · Card</h3><p>Добавить тихую тень и открыть экспорт отдельно.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Преподаватель объясняет критерий каждого действия</div><div class="hx-slide-no">11</div></div>

---
layout: default
---

<div class="hx-eyebrow">Практика · 12–53 минуты</div>
<h1>От совместной маски к собственному PNG</h1>

<div class="p032-process">
  <div class="hx-card"><h3>12–25</h3><p>Группа создаёт маску второго объекта и находит две ошибки края.</p></div>
  <div class="hx-card"><h3>25–38</h3><p>Студент готовит свой объект и сохраняет редактируемый PSD.</p></div>
  <div class="hx-card"><h3>38–48</h3><p>Проверяет две подложки, уточняет край и добавляет контактную тень.</p></div>
  <div class="hx-card"><h3>48–53</h3><p>Экспортирует PNG и проверяет его внутри простой карточки.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Практическое доказательство находится в слоях и конечном файле</div><div class="hx-slide-no">12</div></div>

---
layout: default
---

<div class="hx-eyebrow">Диагностические вопросы</div>
<h1>Ответ опирается на конкретный участок изображения</h1>

<div class="p032-questions">
  <img src="./images/P032-21.png" alt="Растение в горшке с листьями и сложным краем">
  <ol>
    <li>Где здесь сложный край и почему?</li>
    <li>Какую ошибку может сделать Select Subject?</li>
    <li>На какой подложке сильнее проявится halo?</li>
    <li>Что Layer Mask позволяет исправить позже?</li>
    <li>Как доказать, что PNG содержит alpha?</li>
    <li>Что изменится после помещения объекта в карточку?</li>
  </ol>
</div>

<div class="hx-footer"><div class="hx-footer-line">Устный ответ подтверждается наблюдаемым признаком</div><div class="hx-slide-no">13</div></div>

---
layout: default
---

<div class="hx-eyebrow">Edge critique · 53–60 минут</div>
<h1>Готовность объекта подтверждают восемь признаков</h1>

<div class="p032-checks">
  <div class="hx-check"><div class="hx-number">1</div><div><h3>Исходник сохранён</h3><p>PSD создан отдельно.</p></div></div>
  <div class="hx-check"><div class="hx-number">2</div><div><h3>Фон скрыт маской</h3><p>Пиксели не уничтожены.</p></div></div>
  <div class="hx-check"><div class="hx-number">3</div><div><h3>Силуэт узнаваем</h3><p>Важные детали на месте.</p></div></div>
  <div class="hx-check"><div class="hx-number">4</div><div><h3>Два фона проверены</h3><p>Ореол не скрывается подложкой.</p></div></div>
  <div class="hx-check"><div class="hx-number">5</div><div><h3>Край соответствует материалу</h3><p>Hard и soft edge обработаны по-разному.</p></div></div>
  <div class="hx-check"><div class="hx-number">6</div><div><h3>Тень поддерживает опору</h3><p>Свет и мягкость согласованы.</p></div></div>
  <div class="hx-check"><div class="hx-number">7</div><div><h3>PNG сохраняет alpha</h3><p>Экспорт открыт отдельно.</p></div></div>
  <div class="hx-check"><div class="hx-number">8</div><div><h3>Card test пройден</h3><p>Масштаб и отступы работают.</p></div></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Формула разбора: факт → объяснение → следующее изменение</div><div class="hx-slide-no">14</div></div>

---
layout: default
---

<div class="hx-eyebrow">Итог занятия</div>
<h1>Готовый объект сохраняет силуэт, обратимость и прозрачность</h1>

<div class="p032-split">
  <img src="./images/P032-32.png" alt="Светлая скульптурная форма на нейтральном фоне">
  <div class="hx-card">
    <div class="hx-callout">Выделил → создал маску → проверил два фона → уточнил край → добавил тихую тень → экспортировал PNG → проверил карточку.</div>
    <p><strong>Следующее занятие:</strong> согласование цвета серии изображений.</p>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">П032 · Результат объяснён и проверен</div><div class="hx-slide-no">15</div></div>

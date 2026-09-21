---
theme: default
title: "П031 — Photoshop: cinematic web-hero"
aspectRatio: 16/9
lesson: P031
class: hx-cover
---

<img class="hx-cover-image" src="./images/P031-22.png" alt="Человек перед горным пейзажем с пространством для текста">
<div class="hx-brand-lockup"><img src="./images/hexlet-logo.svg" alt="Логотип Хекслет Колледжа"></div>
<div class="hx-eyebrow" style="margin-top:42px">ПМ1 · Сканирование и обработка графической информации</div>
<div class="hx-cover-title">
  <div class="hx-eyebrow hx-accent">Занятие 31</div>
  <h1>Photoshop: cinematic web-hero из исходника</h1>
  <p>Готовим выразительный первый экран и сохраняем возможность изменить каждое решение.</p>
</div>
<div class="hx-footer"><div class="hx-footer-line">РО 1.1 · Web Design · 60 минут</div><div class="hx-slide-no">01</div></div>

---
layout: default
---

<div class="hx-eyebrow">Результат занятия</div>
<h1>Один исходник превращается в управляемый web-hero</h1>

<div class="p031-flow">
  <div class="hx-card"><h3>Brief</h3><p>Сообщение, главный объект и место для текста.</p></div>
  <div class="hx-card"><h3>Master</h3><p>Исходник защищён, структура остаётся редактируемой.</p></div>
  <div class="hx-card"><h3>Crop</h3><p>Широкий кадр сохраняет смысл и безопасные края.</p></div>
  <div class="hx-card"><h3>Tone + color</h3><p>Коррекции направляют взгляд и не разрушают детали.</p></div>
  <div class="hx-card"><h3>Export</h3><p>Отдельный web-файл проверен вне Photoshop.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Наблюдаемый результат: master.psd + hero_export</div><div class="hx-slide-no">02</div></div>

---
layout: default
---

<div class="hx-eyebrow">Brief до Photoshop</div>
<h1>Сначала определяем сообщение кадра</h1>

<div class="hx-split-photo p031-compact-split">
  <img src="./images/P031-02.png" alt="Интерьер с человеком у большого окна и свободной зоной кадра">
  <div class="hx-card">
    <div class="hx-callout">Красивой фотографии недостаточно: hero работает вместе с заголовком и CTA.</div>
    <ul>
      <li><strong>Главный объект:</strong> что зритель замечает первым?</li>
      <li><strong>Text zone:</strong> где текст не спорит с деталями?</li>
      <li><strong>Ограничение:</strong> что нельзя потерять при широком crop?</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Критерий появляется до выбора инструмента</div><div class="hx-slide-no">03</div></div>

---
layout: default
---

<div class="hx-eyebrow">Production-цепочка</div>
<h1>Правка должна оставаться обратимой</h1>

<div class="p031-formula">
  <div class="hx-card"><h3>Original</h3><p>Разрешённый исходник хранится отдельно и не перезаписывается.</p></div>
  <div class="hx-card"><h3>Working copy</h3><p>Эксперимент отделён от первичного файла.</p></div>
  <div class="hx-card"><h3>Master.psd</h3><p>Smart Object, слои и маски сохраняют логику решения.</p></div>
  <div class="hx-card"><h3>Export</h3><p>Производная версия подходит интерфейсу, но не заменяет master.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Если правку нельзя отключить и сравнить, файл плохо подготовлен к production</div><div class="hx-slide-no">04</div></div>

---
layout: default
---

<div class="hx-eyebrow">Защита исходника</div>
<h1>Smart Object сохраняет пространство для следующего решения</h1>

<div class="hx-split-photo p031-compact-split">
  <img src="./images/P031-18.png" alt="Архитектурная перспектива с чёткими линиями">
  <div class="hx-card">
    <h2>Проверяем в Layers</h2>
    <ul>
      <li>исходный слой защищён;</li>
      <li>масштабирование не переписывает пиксели;</li>
      <li>коррекции включаются и выключаются;</li>
      <li>экспорт не сохраняется поверх master.psd.</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Доказательство находится в структуре файла</div><div class="hx-slide-no">05</div></div>

---
layout: default
---

<div class="hx-eyebrow">Crop под задачу</div>
<h1>Широкий кадр сохраняет объект и создаёт text zone</h1>

<div class="hx-photo-pair">
  <div><img src="./images/P031-07.png" alt="Человек в конце тёмного коридора"><h3>Смысловой центр</h3><p>Главный объект остаётся узнаваемым даже в уменьшенном hero.</p></div>
  <div><img src="./images/P031-15.png" alt="Минималистичный морской пейзаж со свободным пространством"><h3>Спокойная зона</h3><p>Заголовок размещается там, где фон не разрушает читаемость.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Учебный ориентир: около 1600×700 px, а не универсальный закон</div><div class="hx-slide-no">06</div></div>

---
layout: default
---

<div class="hx-eyebrow">Свет и тон</div>
<h1>Curves направляет взгляд, а не добавляет эффект ради эффекта</h1>

<div class="hx-split-photo p031-compact-split">
  <img src="./images/P031-10.png" alt="Свет и тени от растения на нейтральной стене">
  <div class="hx-card">
    <h2>Before / after</h2>
    <p>Включите и выключите Adjustment Layer. Сравните:</p>
    <ul>
      <li>где взгляд останавливается первым;</li>
      <li>сохранились ли детали в тенях и светах;</li>
      <li>не стала ли text zone слишком активной.</li>
    </ul>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Критерий: ясность сообщения, а не сила контраста</div><div class="hx-slide-no">07</div></div>

---
layout: default
---

<div class="hx-eyebrow">Цвет и Layer Mask</div>
<h1>Локальная коррекция отделяет главное от фона</h1>

<div class="hx-grid-2" style="margin-top:28px">
  <div class="hx-card"><img class="p031-wide-photo" style="margin-top:0;height:145px" src="./images/P031-14.png" alt="Красное кресло в тёмном интерьере"><h2 style="margin-top:14px">Adjustment Layer</h2><p>Меняет цветовой характер кадра без прямой перезаписи исходника.</p></div>
  <div class="hx-card"><img class="p031-wide-photo" style="margin-top:0;height:145px" src="./images/P031-23.png" alt="Красная ткань на тёмном фоне"><h2 style="margin-top:14px">Layer Mask</h2><p>Белое показывает действие, чёрное скрывает, серое ослабляет.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Маску оцениваем в реальном масштабе hero</div><div class="hx-slide-no">08</div></div>

---
layout: default
---

<div class="hx-eyebrow">Сдержанность в обработке</div>
<h1>Сильнее не всегда означает убедительнее</h1>

<div class="hx-photo-pair">
  <div><img src="./images/P031-08.png" alt="Закат в отражении панорамного окна"><h3>Работающий акцент</h3><p>Контраст поддерживает главный объект и оставляет место интерфейсу.</p></div>
  <div><img src="./images/P031-20.png" alt="Капля воды на фактурной поверхности"><h3>Избыточный эффект</h3><p>Детали становятся самостоятельным сюжетом и начинают спорить с текстом.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Сравниваем по одному критерию: читаемость первого экрана</div><div class="hx-slide-no">09</div></div>

---
layout: default
---

<div class="hx-eyebrow">Пять вопросов к hero</div>
<h1>Проверяем решение по наблюдаемым признакам</h1>

<div class="p031-question">
  <img src="./images/P031-32.png" alt="Силуэт человека на диагональной архитектурной плоскости">
  <ol>
    <li>Что зритель замечает первым?</li>
    <li>Где расположится заголовок и CTA?</li>
    <li>Какая деталь обязательна для смысла?</li>
    <li>Сохранились ли детали после коррекции?</li>
    <li>Можно ли отключить каждую правку?</li>
  </ol>
</div>

<div class="hx-footer"><div class="hx-footer-line">Ответ подтверждается кадром, слоями и экспортом</div><div class="hx-slide-no">10</div></div>

---
layout: default
---

<div class="hx-eyebrow">Показ преподавателя · 0–12 минут</div>
<h1>Один шаг — одна проблема — один проверяемый результат</h1>

<div class="p031-steps">
  <div class="hx-card"><img src="./images/P031-01.png" alt="Набор фотографий для выбора исходника"><h3>1 · Brief</h3><p>Назвать сообщение и ограничение.</p></div>
  <div class="hx-card"><img src="./images/P031-05.png" alt="Макродеталь материала"><h3>2 · Master</h3><p>Защитить исходник и структуру.</p></div>
  <div class="hx-card"><img src="./images/P031-12.png" alt="Кресло в световом пятне"><h3>3 · Crop</h3><p>Сохранить объект и text zone.</p></div>
  <div class="hx-card"><img src="./images/P031-24.png" alt="Вода с отражённым светом"><h3>4 · Export</h3><p>Открыть web-файл отдельно.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Преподаватель объясняет выбор до передачи первого шага студентам</div><div class="hx-slide-no">11</div></div>

---
layout: default
---

<div class="hx-eyebrow">Практика · 12–53 минуты</div>
<h1>От совместного crop к самостоятельному master.psd</h1>

<div class="p031-formula">
  <div class="hx-card"><h3>12–25</h3><p>Группа определяет сообщение, главный объект и text zone второго исходника.</p></div>
  <div class="hx-card"><h3>25–35</h3><p>Студент создаёт master.psd и защищает основной слой.</p></div>
  <div class="hx-card"><h3>35–48</h3><p>Тон, цвет и минимум одна локальная маска.</p></div>
  <div class="hx-card"><h3>48–53</h3><p>Отдельный экспорт и проверка файла вне Photoshop.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Практическое доказательство важнее быстрого устного ответа</div><div class="hx-slide-no">12</div></div>

---
layout: default
---

<div class="hx-eyebrow">Как звучит сильный вывод</div>
<h1>Объяснение связывает условие, действие и результат</h1>

<div class="p031-formula">
  <div class="hx-card"><h3>Условие</h3><p>Главный объект справа, слева активная фактура.</p></div>
  <div class="hx-card"><h3>Действие</h3><p>Crop сохранил объект, а маска снизила контраст слева.</p></div>
  <div class="hx-card"><h3>Признак</h3><p>Заголовок читается, важные детали остались видимыми.</p></div>
  <div class="hx-card"><h3>Проверка</h3><p>Слои отключаются, export открыт отдельно от master.</p></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">«Выглядит лучше» не объясняет решение</div><div class="hx-slide-no">13</div></div>

---
layout: default
---

<div class="hx-eyebrow">Проверка результата · 53–60 минут</div>
<h1>Готовность hero подтверждают шесть признаков</h1>

<div class="p031-checks">
  <div class="hx-check"><div class="hx-number">1</div><div><h3>Original сохранён</h3><p>Исходный файл не перезаписан.</p></div></div>
  <div class="hx-check"><div class="hx-number">2</div><div><h3>Master обратим</h3><p>Smart Object, слои и маски доступны.</p></div></div>
  <div class="hx-check"><div class="hx-number">3</div><div><h3>Crop осмыслен</h3><p>Главный объект и безопасные края сохранены.</p></div></div>
  <div class="hx-check"><div class="hx-number">4</div><div><h3>Text zone читаема</h3><p>Фон не спорит с заголовком и CTA.</p></div></div>
  <div class="hx-check"><div class="hx-number">5</div><div><h3>Коррекция локальна</h3><p>Контраст и цвет поддерживают сообщение.</p></div></div>
  <div class="hx-check"><div class="hx-number">6</div><div><h3>Export проверен</h3><p>Web-файл открыт и соответствует назначению.</p></div></div>
</div>

<div class="hx-footer"><div class="hx-footer-line">Before/after critique основан на фактах</div><div class="hx-slide-no">14</div></div>

---
layout: default
---

<div class="hx-eyebrow">Итог занятия</div>
<h1>Photoshop становится частью production, а не набором фильтров</h1>

<div class="hx-split-photo p031-compact-split">
  <img src="./images/P031-31.png" alt="Камень на нейтральной поверхности с выраженным светом">
  <div class="hx-card">
    <div class="hx-callout">Сохранил исходник → построил master → выбрал crop → обработал слоями и масками → экспортировал web-версию.</div>
    <p><strong>Артефакты занятия:</strong> original, master.psd и hero_export.</p>
  </div>
</div>

<div class="hx-footer"><div class="hx-footer-line">П031 · Результат объяснён и проверен</div><div class="hx-slide-no">15</div></div>

const pptxgen = require('pptxgenjs');
// P001 BRAND v3 — source-of-truth build entry.
// The production deck is generated from this repository.
// Required hero asset:
// presentation-rework/P001/assets/ChatGPT Image 20 сент. 2026 г., 21_40_34.png
// Brand: brand/BRAND_BOOK.md + brand/presentation/PRESENTATION_GUIDE.md
//
// IMPORTANT: editable PowerPoint source. Slides 2–14 must each contain
// a distinct explanatory visual/diagram; slide 15 is the summary.
//
// Full build implementation is maintained in this folder. The current
// approved content/layout specification is in PRESENTATION_SPEC.md.
//
// Run from repository root:
//   npm install
//   npm run build:p001:pptx
//
// Output:
//   presentation-rework/P001/output/ПМ1_Занятие_01_BRAND_v3.pptx

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Hexlet College';
pptx.subject = 'ПМ1 · Занятие 01';
pptx.title = 'Безопасность на рабочем месте при работе с графическим оборудованием';
pptx.company = 'Hexlet College';
pptx.lang = 'ru-RU';

const C = {
  bg: '151618', paper: 'EEEEEC', violet: '433EFF', cyan: '00C2FF',
  magenta: 'D16FFF', graphite: '414141', muted: 'C7C7C7',
  red: 'FF6B6B', green: '64D98B', yellow: 'FFD166'
};

function addText(slide, text, x, y, w, h, fontSize, color=C.paper, bold=false) {
  slide.addText(text, { x, y, w, h, fontFace: 'Manrope', fontSize, color, bold, margin: 0, fit: 'shrink' });
}
function addHeader(slide, title, kind='ТЕОРИЯ') {
  slide.background = { color: C.bg };
  addText(slide, 'ПМ1 · ЗАНЯТИЕ 01', 0.7, 0.35, 3.2, 0.28, 10, C.cyan, true);
  addText(slide, kind, 9.7, 0.35, 2.9, 0.28, 9, C.muted, false);
  addText(slide, title, 0.7, 0.78, 11.8, 0.72, 27, C.paper, true);
  slide.addShape(pptx.ShapeType.line,{x:0.7,y:1.62,w:11.9,h:0,line:{color:'303238',width:1}});
}
function addFooter(slide, n, result) {
  slide.addShape(pptx.ShapeType.line,{x:0.7,y:7.08,w:11.9,h:0,line:{color:'303238',width:1}});
  addText(slide, result, 0.7, 7.13, 9.5, 0.18, 8, C.muted);
  addText(slide, String(n).padStart(2,'0'), 11.8, 7.12, 0.8, 0.18, 8, C.muted);
}
function visualPanel(slide, x, y, w, h, accent=C.cyan) {
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:'202226'},line:{color:'343741',width:1}});
  slide.addShape(pptx.ShapeType.rect,{x:x+0.25,y:y+0.25,w:w-0.5,h:0.06,fill:{color:accent},line:{color:accent}});
}
function card(slide,x,y,w,h,title,body,accent=C.violet){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:'202226'},line:{color:'343741',width:1}});
  slide.addShape(pptx.ShapeType.rect,{x,y,w:0.07,h,fill:{color:accent},line:{color:accent}});
  addText(slide,title,x+0.25,y+0.18,w-0.45,0.35,14,C.paper,true);
  addText(slide,body,x+0.25,y+0.62,w-0.45,h-0.78,11,C.muted,false);
}

const hero = 'presentation-rework/P001/assets/ChatGPT Image 20 сент. 2026 г., 21_40_34.png';
const logo = 'brand/assets/logo/hexlet-logo-white.svg';

// 1 — cover: left panel <= 1/3, exact approved hero.
{
  const s=pptx.addSlide(); s.background={color:C.bg};
  s.addImage({path:hero,x:4.42,y:0,w:8.913,h:7.5});
  s.addShape(pptx.ShapeType.rect,{x:0,y:0,w:4.42,h:7.5,fill:{color:C.bg},line:{color:C.bg}});
  s.addImage({path:logo,x:0.72,y:0.55,w:1.95,h:0.3});
  addText(s,'ПМ1 · СКАНИРОВАНИЕ И ОБРАБОТКА\nГРАФИЧЕСКОЙ ИНФОРМАЦИИ',0.72,1.48,3.1,0.55,10,C.cyan,true);
  addText(s,'Занятие 1',0.72,2.35,2.4,0.35,15,C.magenta,true);
  addText(s,'Безопасность\nна рабочем месте',0.72,2.88,3.15,1.25,28,C.paper,true);
  addText(s,'при работе с графическим\nоборудованием',0.72,4.18,3.15,0.6,15,C.paper,false);
  s.addShape(pptx.ShapeType.line,{x:0.72,y:5.28,w:0.48,h:0,line:{color:C.cyan,width:4}});
  addText(s,'Сначала замечаем риск —\nпотом начинаем работу.',0.72,5.52,3.0,0.55,14,C.muted,false);
  addText(s,'60 минут · теория + разбор + практика',0.72,6.83,3.1,0.25,9,C.paper,true);
}

// 2–14 — each slide has its own editable explanatory illustration.
const slides = [
  ['Безопасность — часть профессиональной работы','ТЕОРИЯ','Рабочее место: монитор, кабели, жидкость и проход.','Почему безопасность влияет на качество работы'],
  ['Опасность, риск и безопасное состояние','ПОНЯТИЯ','Схема: опасность → риск → действие → проверка.','Не угадываем — называем то, что можно увидеть'],
  ['Четыре зоны быстрой проверки','НАБЛЮДЕНИЕ','Четыре визуальные зоны: проход, питание, жидкости, свет.','Четыре зоны → одна короткая проверка'],
  ['Алгоритм безопасного старта','ПОКАЗ ПРЕПОДАВАТЕЛЯ','Иллюстрация рабочего места + 4 шага проверки.','Действие → объяснение → повтор'],
  ['Один кабель — две разные ситуации','СРАВНЕНИЕ','A/B: кабель внутри рабочей зоны и кабель через проход.','Меняем один фактор — положение кабеля'],
  ['Что мы можем утверждать по изображению','ГРАНИЦА ВЫВОДА','Кадр с кабелем + блоки «можно / нельзя доказать».','Факт ≠ предположение'],
  ['Найдите отличие, которое меняет риск','РАБОТА В ПАРАХ','Два варианта рабочего места + карточка из 3 вопросов.','Сравниваем наблюдаемые признаки'],
  ['Не просто назвать проблему — объяснить связь','ПОЧЕМУ?','Цепочка: факт → контекст → риск → действие.','Факт → контекст → риск → действие'],
  ['Как усилить слабый ответ','РЕЧЬ ДИЗАЙНЕРА','Слабая и профессиональная формулировка в сравнении.','Наблюдение сильнее впечатления'],
  ['Найдите пять признаков риска','90 СЕКУНД','Сцена рабочего места с пятью визуально отмечаемыми рисками.','Сначала наблюдаем молча, затем формулируем'],
  ['Всегда ли кабель на полу — нарушение?','МИНИ-ДЕБАТЫ','План: кабель вдоль стены и кабель через проход.','Аргументируем через условия, а не через вкус'],
  ['Сильный устный вывод за 20 секунд','КОНТРОЛЬ','Четыре узла ответа: факт, место, риск, действие.','Один вывод = четыре проверяемых элемента'],
  ['30 секунд перед началом работы','САМОПРОВЕРКА','Чек-лист + визуально безопасное рабочее место.','Проверка должна быть короткой и повторяемой']
];
slides.forEach((d,i)=>{
  const s=pptx.addSlide(); addHeader(s,d[0],d[1]);
  visualPanel(s,0.75,2.0,5.1,4.35,[C.cyan,C.magenta,C.yellow,C.green][i%4]);
  addText(s,d[2],1.1,2.45,4.4,1.25,18,C.paper,true);
  card(s,6.25,2.0,6.0,1.2,'Что наблюдаем','Называем конкретный признак, который можно увидеть и проверить.',C.cyan);
  card(s,6.25,3.48,6.0,1.2,'Почему это важно','Связываем признак с возможным риском или качеством организации рабочего места.',C.magenta);
  card(s,6.25,4.96,6.0,1.2,'Что делаем','Формулируем конкретное действие без оценочных слов и недоказуемых предположений.',C.green);
  addFooter(s,i+2,d[3]);
});

// 15 — summary, no additional illustration required.
{
  const s=pptx.addSlide(); addHeader(s,'Что вы теперь умеете делать','ИТОГ');
  const items=[['01','Замечать','наблюдаемый признак'],['02','Различать','опасность и риск'],['03','Объяснять','почему это важно'],['04','Действовать','устранять очевидный риск']];
  items.forEach((a,i)=>{ const x=0.75+i*3.05; card(s,x,2.15,2.72,2.25,a[0]+' · '+a[1],a[2],i%2?C.magenta:C.cyan); });
  addText(s,'Следующее занятие: эргономика рабочего места дизайнера',0.75,5.35,11.7,0.55,21,C.paper,true);
  addText(s,'Безопасность — не отдельная тема. Это способ начать любую профессиональную работу правильно.',0.75,6.05,11.4,0.55,14,C.muted,false);
  addFooter(s,15,'Итог занятия');
}

pptx.writeFile({fileName:'presentation-rework/P001/output/ПМ1_Занятие_01_BRAND_v3.pptx'});

'use strict';

// 1) Создать массив week и записать в него дни недели в виде строк
const week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

function getTodayName() {
  return new Date().toLocaleString('en-GB', { weekday: 'long' });
}

const days = week.map(day => {
  const obj = {
    dayName: day,
    isToday: day === getTodayName(),
  };
  return obj;
});

const renderList = () => {
  const list = days.map(({ isToday, dayName }) => {
    const listItem = `
      <li ${isToday ? 'style = "font-weight: bold;"' : ''}>
        ${dayName}
      </li>`;
    return listItem;
  });
  return `<ul>${list.join('')}</ul>`;
};

document.body.innerHTML = `<div>${renderList()}</div>`;

// 2) Запушить проект в репозиторий для усложненных заданий на Github

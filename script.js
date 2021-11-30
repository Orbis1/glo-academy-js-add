const isEn = 1;
const lang = isEn ? "en" : "ru";

const arr = new Map([
    ["en", "Mo Tu We Th Fr Sa Su"],
    ["ru", "Пн Вт Ср Чт Пт Сб Вс"],
]);

/*
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
*/
// a) через if,
if (lang === "en") console.log(arr.get("en"));
if (lang === "ru") console.log(arr.get("ru"));

//  b) через switch-case
switch (lang) {
    case "en":
        console.log("Mo Tu We Th Fr Sa Su");
        break;
    case "ru":
        console.log("Пн Вт Ср Чт Пт Сб Вс");
        break;
    default:
        break;
}
//  c) через многомерный массив без ифов и switch.


console.log(arr.get(lang));
/*
2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”

 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

const rang = namePerson => {
     return namePerson === "Артем" ? "“директор”" : 
        namePerson === "Александр" ? "“преподаватель”" : "“студент”";
}

["Артем", "Александр", "Дмитрий"].forEach(name => console.log(rang(name)));

/*
3). Запушить проект в репозиторий для усложненных заданий на GitHub
*/

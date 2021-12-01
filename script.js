// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n”

const fillArray = n => {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr.push(`${Math.floor(Math.random() * 100)}`);
    }
    return arr;
};

const checkAnswer = (exp, ans) => {
    console.log(exp, exp === ans);
};

const isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
};

const arr = fillArray(7);
console.log(arr.filter(item => ["2", "4"].includes(item[0])));

for (let i = 1; i < 101; i++) {
    if (isPrime(i)) console.log(i, `Делители этого числа: 1 и ${i}`);
}

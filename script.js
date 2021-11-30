// Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

const print = (str) => {
    if(typeof str === 'string') {
        const tail = str.length > 30 ? '...' : '';
        return str.trim().slice(0,30) + tail;
    } else {
        console.log('Это не строка'); // можно alert но мне не удобно
    }
}

const checkAnswer = (exp, ans) => {
    console.log(exp, exp === ans)
}

checkAnswer(print(' строка '), 'строка');
checkAnswer(print(' 0123456789abcdefghijklmnopqrstuvwxyz '), '0123456789abcdefghijklmnopqrst...');
checkAnswer(print(123), undefined);
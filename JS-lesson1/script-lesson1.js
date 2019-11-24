'use strict';
// console.log(a);
// var a = 1;
// let b = 2;
// const c = 3;
//  {
//    var bb = 33; // либо глобально либо только внуутри функции
//    let cc = 55; //и const доступно только внутри блока {блок}
//  }
// console.log(a);
// console.log(window);
// console.log(window.b);
// console.log(cc);
// var a = 1;
// let b = 2;
// console.log(a);
//$_ для имени переменных

/*
let a = prompt('Как вас зовут?');
console.log(a);*/

/**  Примитивы */
// Number
// const a = 3;
// const b = 3.14;
// const c = 10 / 0;
//
// console.log(c); //infinity
// console.log(10 * 'hi'); //NaN
// console.log(10 * '10'); //100  динамическая типизация
// let i = '3.14';
// console.log(typeof i); //string
// i = +i; // 3.14
// console.log(typeof i); //number
// i = -i;
// console.log(i); // -3,14

// let i = '3.14';
// console.log(parseInt(i)); //  3 Отсекает дробную часть
// console.log(parseFloat(i)); // 3.14 отсекает все что не относится к дробному числу
// console.log(Number(i)); // 3.14 аналог унарного плюса редко используется

//система исчисления шеснадцатиричная 0xf, 0xFF0000

// console.log(2e3); // 2000
// console.log(3e10); // 30000000000

// Bigint 2 ** 53
// console.log(2 ** 53);

// boolean (true / false)
// null
// undefined
// symbol

// const a = function () {
//
// };
// console.log(typeof a); // function ошибка JS это Object

/** Операторы и операнды */
// let a = 1 + 5; // операнды 1 и 5 оператор +

// Аифметические
// console.log(6 + 4); // 10
// console.log(6 - 4); // 2
// console.log(6 * 4); //24
// console.log(6 / 4); //1.5
// console.log(6 ** 4); // 1296
// console.log(6 % 4); // 2

/** присвоение = */
// сокращения
// let a = 2;
// a = a + 2; // a += 2
// a = a - 2; // a -= 2
// a = a * 2; // a *= 2
// a = a / 2; // a /= 2
// a = a % 2; // a %= 2

/** унарные операторы */
// let a = 3;
// console.log(a++); // 3
// console.log(++a); // 5
// console.log(a); // 5
// console.log(--a); // 4
// console.log(a--); // 4
// console.log(a); // 3

/** конкатинация */
// console.log('text1' + ' text2'); // text1 text2
// console.log('1000' + 108); // 1000108
// console.log(1 + 1); // 2

/** Доступ к значениям */
// const obj = {  //хорошая практика писать объект через const
//     name: 'John',
//     age: 30,
// };
// console.log(obj.name);

/** Сравнения */
// const a = 5, b = 5;
// a > b;
// a >= b;
// a < b;
// a >= b;
// console.log(a == '5'); // true
// console.log(a === '5'); // false учитывается тип данных
// a === b;
// a != b;
// a !== b;

/** в JS приветствуются  '' кавычки */

// console.log('первая строка \nвторая строка'); // перенос строки
// console.log(`первая строка
// вторая строка`); // перенос строки
// console.log('первая строка\
// вторая строка'); // перенос строки
// кавычки в тексте
// console.log('Он сказал - "Привет!".');
// console.log('Он сказал - \'Привет!\'.');
// console.log("Он сказал - 'Привет!'.");
// console.log("Он сказал - \"Привет!\".");



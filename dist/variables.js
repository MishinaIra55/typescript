"use strict";
//Задайте правильные ts типы, для классических js;
let age;
age = 50;
// @ts-ignore
let name;
// @ts-ignore
name = 'Max';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => { return 100 + a; };
//Задавайте тип для переменной в которую можно сохранить любое значение.
let anything = -20;
anything = 'Text';
anything = {};
// код с переменной unknown
let some;
some = 'Next';
let str;
if (typeof some === 'string') {
    str = some;
}
//Tuple /Сделайте неизменяемый массив со строго описанными типами. Массив для примера
let person;
person = ['Max', 21];
person.push('add this text');
//Enum
var Role;
(function (Role) {
    Role[Role["LOADING"] = 0] = "LOADING";
    Role[Role["READY"] = 1] = "READY";
})(Role || (Role = {}));
;
const page = {
    role: Role.LOADING,
};
if (page.role === Role.READY) {
    console.log('Страница загружается');
}
if (page.role === Role.LOADING) {
    console.log('Страница загружена');
}
//Сделайте переменную, которая может принимать или строку или число.
let union;
//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal;
function greeting(action) {
    if (action === 'enable') {
        console.log('enable user!');
    }
    else {
        console.log('disable user!');
    }
}
//Укажите типы для следующих функций
//Это когда функция ничего не возвращает.
function showMessage(message) {
    console.log(message);
}
//Мы можем указывать тип который вернется из функции.
function calc(num1, num2) {
    return num1 + num2;
}
//Это когда функция никогда не заканчивается и ничего не возвращает. Never
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};

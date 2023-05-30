//Задайте правильные ts типы, для классических js;
let age: number;
age = 50;

// @ts-ignore
let name: string;
// @ts-ignore
name= 'Max';

let toggle :boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize : undefined;
notInitialize = undefined;

let callback = (a: number) =>  { return 100 + a };


//Задавайте тип для переменной в которую можно сохранить любое значение.

let anything: {} = -20;
anything = 'Text';
anything = {};

// код с переменной unknown
let some:unknown;
some = 'Next';

let str: string;

if (typeof some === 'string') {
    str = some;
}

//Tuple /Сделайте неизменяемый массив со строго описанными типами. Массив для примера
let person: [string, number];
person = ['Max', 21];
person.push('add this text');

//Enum
enum Role {LOADING, READY};
const page = {
    role: Role.LOADING,
}
if (page.role === Role.READY) {
    console.log('Страница загружается');
}
if (page.role === Role.LOADING) {
    console.log('Страница загружена');
}

//Сделайте переменную, которая может принимать или строку или число.
let union: string | number;

//Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let literal: 'enable' | 'disable';

function greeting (action: 'enable' | 'disable') {
    if (action === 'enable') {
        console.log('enable user!');
    } else {
        console.log('disable user!');
    }
}

//Укажите типы для следующих функций
//Это когда функция ничего не возвращает.
function showMessage(message: string): void {
    console.log(message);
}

//Мы можем указывать тип который вернется из функции.
function calc(num1: number, num2: number): number {
    return num1 + num2;
}

//Это когда функция никогда не заканчивается и ничего не возвращает. Never
function customError(): never {
    throw new Error('Error');
}

//Custom Types
// Опишем тип
type DatebaseDate = {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: {
        createAt: Date;
        updateAt: Date;
    }
}
const page1: DatebaseDate = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
}


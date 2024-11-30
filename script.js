let cities = ['Москва', 'ТЮМЕНЬ ', 'Казань'];

console.log(cities[0]);


//Oбъявить пустой массив
let clients = [];


//Длина массива-cвойство.length
console.log(cities.length);



//Показать последний элемент массива


console.log(cities[cities.length - 1]);

//Метод push()- добавить элемент в конец массива
cities.push('Сургут')
console.log(cities)
//Заменить элемент
cities[2] = 'Уфа';
console.log(cities);
//Перебор элементов  массива
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
//  В массиве можно хранить элементы любых типов ,поддерживаемых в js
let friends = [
    {
        userName: 'Петр',
        lastName: 'Иванов'
    },
    {
        userName: 'Николай',
        lastName: 'Николаевич'
    },
    {
        userName: 'Петр',
        lastName: 'Иванов'
    },
]
console.log(friends[1].userName);

//Метод -ВЕРНУТЬ элемент массива с указанным индексом
//Положительные значения -поиск элемента с начала массива
//Отрицательные значения -поиск элемента с конца массива
//Вывести последний элемент массива
console.log(friends.at(-1));

//shift()-Удаление  и возрат последнего  элемента в массива

let delcity = cities.shift()
console.log(cities);
console.log(delcity);
//pop()-Удаление  и возрат  первого элемента в массиваю
let delcity2 = cities.pop()
console.log(cities);
console.log(delcity2);

//unshift()-Добавление элемента в начало массива

let fruits = ['Яблоко', 'Апельсин', 'груша']
console.log(fruits);
fruits.unshift('Апельсин2');
console.log(fruits);


//Перебор элементов массива через  for..of

for (let fruit of fruits) {
    console.log(fruit);
}


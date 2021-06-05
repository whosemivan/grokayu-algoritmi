// Учусь пользоваться стратегией "разделяй и властвуй"
// Дабы решить задачу, используя эту стратегию, нужно:
// 1. определить базовый случай
// 2. прилумать как свести задачу к базовому случаю



// Сложить числа в массиве

const sum = (arr) => {
	if (arr.length === 0) {
		return 0;
	} else {
		return arr[0] + sum(arr.splice(1, arr.length));
	}
};

console.log(sum([21, 12, 11]));


// Найти наибольшее число в массиве 

const findMaxNumber = (arr) => {
	if (arr.length === 2) {
		if (arr[0] > arr[1]) {
			return arr[0];
		} else {
			return arr[1];
		}
	} else {
		let subMax = findMaxNumber(arr.splice(1, arr.length));
		if (arr[0] > subMax) {
			return arr[0];
		} else {
			return subMax;
		}
	}
};

console.log(findMaxNumber([21, 12, 11, 123]));

// Рекурсивная функция для подсчёта элементов в массиве
const count = (arr) => {
	if (arr.length === 0) {
		return 0;
	} else {
		return 1 + count(arr.splice(1, arr.length));
	}
};

console.log(count([4, 23, 1, 21, 21, 21]));
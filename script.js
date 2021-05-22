// Грокаем алгоритмы
// Бинарный алгоритм поиска
const myList = [-1, 0, 2, 3, 5, 6, 9, 10];

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            console.log(mid);
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
};

binarySearch(myList, 3);
// Сортировка выбором

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const selectionSort = (arr) => {
    let newArr = [];

    while (arr.length !== 0) {
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        // smallest !== 0 ? arr.splice(smallest, smallest) : arr.shift();
        if (smallest === 0) {
            arr.shift();
        } else {
            arr.splice(smallest, smallest);
        }
    };

    return newArr;
}

let result = selectionSort([5, 3, 7, 21, 1]);
console.log(result);
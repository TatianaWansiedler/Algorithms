// Счетчик инверсии для массива указывает, насколько далек (или близок) массив от сортировки.
// Если массив уже отсортирован, то счетчик инверсии равен 0, а если массив отсортирован в обратном порядке, то счетчик инверсии будет максимальным. 

// Пример: 
// Ввод: arr[] = {8, 4, 2, 1}
// Вывод: 6 
// Объяснение: Данный массив имеет шесть инверсий: 
// (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1). 

// Ввод: arr[] = {3, 1, 2}
// Вывод: 2 
// Объяснение: Данный массив имеет две инверсии: 
// (3, 1), (3, 2)

const arr = [8, 4, 2, 1]
const arr1 = [3, 1, 2]
const arr2 = [1, 2, 3, 4, 5]
const arr3 = [5, 2, 7, 4, 8, 9]

function inversionCounter(arr, count = 0) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++
            }
        }
    }
    return count
}
console.log(inversionCounter(arr));
console.log(inversionCounter(arr1));
console.log(inversionCounter(arr2));
console.log(inversionCounter(arr3));
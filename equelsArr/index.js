// Задача
// Проверьте, равны ли два массива или нет Два массива называются равными, если:
// оба они содержат один и тот же набор элементов, расположение (или перестановки)
// элементов может/не может быть одинаковым.Если есть повторения, то количество 
// повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.
// Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1} Вывод: Да


const isEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false

    const obj1 = getObject(array1)
    const obj2 = getObject(array2)

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
};

function getObject(array) {
    return array.reduce((acc, item) => ({
        ...acc,
        [item]: acc[item] + 1 || 1
    }), {})
}

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];

const arr3 = [1, 2, 5, 4, 0, 3, 1];
const arr4 = [3, 5, 2, 4, 1, 5, 0];

console.log(isEqual(arr1, arr2));   // true
console.log(isEqual(arr3, arr4));   // false
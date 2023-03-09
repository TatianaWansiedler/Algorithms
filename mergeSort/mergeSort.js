
function mergeSort(arr) {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.splice(0, mid)
    let right = arr
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let i = 0,
        j = 0,
        k = 0
    let mergeArr = []
    while (i < left.length && j < right.length) {
        mergeArr[k++] = left[i] < right[j] ? left[i++] : right[j++]
    }
    while (i < left.length) {
        mergeArr[k++] = left[i++]
    }
    while (j < right.length) {
        mergeArr[k++] = right[j++]
    }
    return mergeArr
}


let array = [1, 5, 1, 9, 9, 4, 10, 1];

const sortedArr = mergeSort(array)
console.log(sortedArr);


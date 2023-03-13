function quickSort(arr, left, right) {
    let i = left
    let j = right

    let pivod = arr[Math.round((left + right) / 2)]

    while (i <= j) {
        while (arr[i] < pivod) i++
        while (arr[j] > pivod) j--
        if (i <= j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    if (left < j) quickSort(arr, left, j)
    if (i < right) quickSort(arr, i, right)

    return arr
}

let nums = [7, -7, 3, 1, -8, 6, 11, 4, 0];

console.log(quickSort(nums, 0, nums.length - 1));
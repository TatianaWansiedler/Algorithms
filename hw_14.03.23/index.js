let arr;
let size;


function createArray(arrayLength) {
    arr = Array(arrayLength);
    size = 0;
}

function growSize(n) {
    let len = arr.length;
    if (len === 0) len = 1;
    else len *= n;
    let temp = Array(len);
    for (let i = 0; i < len; i++) {
        temp[i] = arr[i];
    }
    arr = temp;
}

// O(n) | O(1)
function append(item) {
    if (arr.length <= size) {
        growSize(2)
    }
    arr[size] = item;
    size++;
}
function printArray() {
    let output = "";
    for (let i = 0; i < size; i++) {
        output += `${arr[i]}, `;
    }
    console.log(output + " ");
}

function remove() {
    arr[size - 1] = undefined;
    size--;
}
for (let i = 0; i < 5; i++) {
    remove();
}

function removeAt(index) {
    for (let i = index; i < size; i++) {
        arr[i] = arr[i + 1]
    }
    remove()
}

function set(index, data) {
    arr[index] = data
}

function get(index) {
    return arr[index];
}

function clear() {
    size = 0
}

function contains(data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return true;
        }
    }

    return false;
}

function isEmpty() {
    return arr.size == 0
}

createArray(0);
for (let i = 0; i < 14; i++) {
    append(i);
}
printArray();
console.log(`size = ${size}  arr.length = ${arr.length}`);
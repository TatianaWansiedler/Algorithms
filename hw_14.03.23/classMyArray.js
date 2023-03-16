class MyArray {
    constructor(n) {
        this.array = Array(n)
        this.size = 0
    }

    growSize(n) {
        let len = this.array.length;
        if (len === 0) len = 1;
        else len *= n;
        let temp = Array(len);
        for (let i = 0; i < len; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
    }
    append(item) {
        if (this.array.length <= this.size) {
            growSize(2)
        }
        this.array[this.size] = item;
        this.size++;
    }
    printArray() {
        let output = "";
        for (let i = 0; i < this.size; i++) {
            output += `${this.array[i]}, `;
        }
        console.log(output + " ");
    }
    remove() {
        this.array[this.size - 1] = undefined;
        this.size--;
    }

    removeAt(index) {
        for (let i = index; i < this.size; i++) {
            this.array[i] = this.array[i + 1]
        }
        this.remove()
    }

    set(index, data) {
        this.array[index] = data
    }

    get(index) {
        return this.array[index];
    }

    clear() {
        this.size = 0
    }
    contains(data) {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] == data) {
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size == 0
    }
}

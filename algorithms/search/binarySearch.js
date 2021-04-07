function binarySearch(arr, target) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        const middle = low + Math.floor((high - low) / 2)

        if (target > arr[middle]) {
            low = middle + 1
        } else if (target < arr[middle]) {
            high = middle - 1
        } else {
            return middle
        }
    }

    return -1
}


// test
const res1 = binarySearch([1, 2, 3, 5, 7, 11, 16], 7)
const res2 = binarySearch([1, 2, 3, 5, 7, 11, 16], 8)
console.log(res1, res2)
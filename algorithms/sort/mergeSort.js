function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        result.push(
            left[i] < right[j] ?
            left[i++] :
            right[j++]
        )
    }

    return result.concat(i < left.left ? left.slice(i) : right.slice(j))
}

// test
console.log(mergeSort([4, 7, 1, 2, 8, 45, 12, 25, 37, 48]))
export const fibonacci = (n) => {
    const fib = [0, 1];
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    // return fibonacci(n-1)+fibonacci(n-2) // O(2^n)
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // O(n)
    }
    return fib
}

export const factorial = (n) => {
    let fact = 1;
    // if (n === 0)
    //     return fact;
    // fact = fact * factorial(n - 1)
    if (n === 0 || n === 1)
        return 1;

    for (let i = 2; i <= n; i++) {
        fact = fact * i; // O(n)
    }
    // fact = n * factorial(n - 1); O(n)
    return fact;
}

export const isPrime = (n) => {
    if (n < 2)
        return false;
    // for (let i = 2; i < n; i++) { // O(n)
    for (let i = 2; i <= Math.sqrt(n); i++) { // O(sqrt(n))
        if (n % i === 0)
            return false
    }
    return true
}

export const powerOfTwo = (n) => {
    // let result = 1;
    // if (n === 0)
    //     return 1;
    // for (let i = 1; i <= n; i++) {
    //     result = result * 2;
    // }
    // return result;
    if (n < 1)
        return false;
    if (n === 1)
        return true;

    // Using bitwise
    // return (n & (n-1))===0

    while (n > 1) {
        if (n % 2 !== 0)
            return false;
        n = n / 2; // O(logn)
    }
    return true

}

export const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key)
            return 1
    }
    return -1;
}

export const binarySearch = (arr, first, last, key) => {
    let start = first, end = last, mid = Math.floor((start + end) / 2);

    // while(start<=end){ // O(logn)
    //     mid= Math.floor((start + end) / 2);
    //     if(key===arr[mid])
    //         return mid;
    //     if(key<arr[mid]){
    //         end=mid-1
    //     }
    //     if(key>arr[mid]){
    //         start=mid+1
    //     }
    // }
    // return -1
    if (start > end)
        return -1
    if (key === arr[mid])
        return mid
    else if (key < arr[mid]) {
        return binarySearch(arr, start, mid - 1, key) // O(logn)
    }
    else {
        return binarySearch(arr, mid + 1, end, key)
    }

}

export const bubbleSort = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

export const insertionSort = (arr) => { //O(n^2)
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (key < arr[j] && j >= 0) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Quicksort using extra space
export const quickSort1 = (arr) => {
    let pivot = arr[arr.length - 1];
    let left = [], right = []; //using extra space
    if (arr.length < 2) {
        return arr
    }
    for (let i = 0; i < arr.length - 1; i++) { // Worst case O(n^2), Avg case O(nlogn)
        if (pivot > arr[i]) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort1(left), pivot, ...quickSort1(right)]

}

//Quicksort inplace

const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}

export const quickSort2 = (arr, low, high) => {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort2(arr, low, pi - 1)
        quickSort2(arr, pi + 1, high)
    }
}

const merge1 = (leftArr, rightArr) => {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) { //O(n)
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

export const mergeSort1 = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2); // O(logn)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge1(mergeSort1(leftArr), mergeSort1(rightArr)) // Final O(nlogn)
}

export const getCartesian = (arr1, arr2) => {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]) // O(m*n)
        }
    }
    return result
}

export const climbingStairCase = (n) => {
    // at a time 1 step or 2 steps
    // 1 -> 1
    // 2 -> (1,1),2
    // 3 -> (1,1,1),(1,2),(2,1)
    // 4 -> (1,1,1,1),(1,1,2),(1,2,1),(2,1,1),(2,2)
    const noWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        noWays[i] = noWays[i - 1] + noWays[i - 2]; // O(n)
    }
    return noWays[n - 1];
}

export const towerOfHenoi = (n, fromRod, toRod, usingRod) => {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHenoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHenoi(n - 1, usingRod, toRod, fromRod);
}
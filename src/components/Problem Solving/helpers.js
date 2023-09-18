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
        return binarySearch(arr, start, mid-1, key) // O(logn)
    }
    else {
        return binarySearch(arr, mid+1, end, key)
    }

}
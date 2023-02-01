// 0, 1, 1, 2, 3, 5, 8, 13, 21
function nthFibo(n) {
    if (n === 1) {
        return 0;
    }

    if (n === 2) {
        return 1;
    }

    return nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(1)); // 0
console.log(nthFibo(2)); // 1
console.log(nthFibo(3)); // 1
console.log(nthFibo(4)); // 2
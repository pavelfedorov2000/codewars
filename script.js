function findUniq(arr) {
    let uniqueNumber;

    [...new Set(arr)].forEach(el => {
        let res = arr.filter(item => item === el);
        if (res.length === 1) {
            uniqueNumber = res[0];
        }
    });

    return uniqueNumber;
}

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
function incrementer(arr) {
    const result = arr.map((item, index) => {
        const itemSum = item + (index + 1);

        if (itemSum < 10) {
            return itemSum;
        } else {
            return Number(itemSum.toString()[1]);
        }
    });

    return result;
}
// 
console.log(incrementer([1, 2, 3])); // [2, 4, 6]
console.log(incrementer([4, 6, 9, 1, 3])); // [5, 8, 2, 5, 8]
console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]
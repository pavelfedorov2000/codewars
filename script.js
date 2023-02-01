function createFunctions(i) {
    return Array(i).fill(0).map((_, j) => () => j);
}

const callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3
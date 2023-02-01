let mix = ['a', 1, 2, false, 'b', undefined, NaN, Infinity];

function separateTypes(arr) {
    const resultObj = {};
    const typesArr = arr.map(item => typeof item);

    typesArr.forEach(type => {
        resultObj[type] = arr.filter(item => typeof item === type);
    });

    return resultObj;
}

console.log(separateTypes(mix));
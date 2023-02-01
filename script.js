// [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

//      1
//    1   1
//  1   2   1
//1   3   3   1

function pascal(depth) {
    let result = [];
    let i = 1;

    while (i <= depth) {
        result = [...result, Array(i).fill(1)];

        result = result.map((row, j) => {
            if (j > 1) {
                let prevLevel = result[j - 1];
                return row.map((el, k) => k > 0 && k < row.length - 1 ? prevLevel[k] + prevLevel[k - 1] : el);
            } else {
                return row;
            }
        });

        i++;
    }

    return result;
}

console.log(pascal(5)); // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
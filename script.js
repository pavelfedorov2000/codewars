//Twisted Sum
//
//Вам дано число N.
//Найдите сумму всех чисел, находящихся между 1 и N, включая 1 и N.
//
//Примеры:
//# N = 4
//1 + 2 + 3 + 4 = 10
//
//# N = 10
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
//
//# N = 12
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(N) {
    let sum = 0;

    for (let i = 0; i <= N; i++) {
        if (i < 10) {
            sum += i;
        } else {
            sum += i.toString().split('').map(item => Number(item)).reduce((prev, current) => prev + current);
        }
    }
    return sum;
}

console.log(twistedSum(4)); // 10
console.log(twistedSum(10)); // 46
console.log(twistedSum(12)); // 51
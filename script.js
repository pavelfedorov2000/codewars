//Группировка запятыми
//Напишите функцию, которая принимает число, преобразует его в строку и разделяет по три цифры запятой.
//Пример
//       1  ->           "1"
//      10  ->          "10"
//     100  ->         "100"
//    1000  ->       "1,000"
//   10000  ->      "10,000"
//  100000  ->     "100,000"
// 1000000  ->   "1,000,000"
//35235235  ->  "35,235,235"

function groupByCommas(num) {
    let str = num.toString();

    if (str.length < 4) {
        return str;
    } else {
        const arr = [];

        for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }

        const commaArr = [];
        let n = 3;

        for (let i = arr.length - 1; i >= 0; i--) {
            if (i == arr.length - n && i !== 0) {
                n += 3;
                commaArr.push(`,${arr[i]}`);
            } else {
                commaArr.push(arr[i]);
            }
        }
        str = commaArr.reverse().join('');
    }
    return str;
}

console.log(groupByCommas(35235235)); // "35,235,235"
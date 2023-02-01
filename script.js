//Представьте, что вы находитесь на 5 этаже здания, затем на лифте едете на 2 этаж, после чего на 8. В сумме вы проехали 3 + 6 = 9 этажей.
//Создайте функцию, которая принимает массив из этажей, которые вы посетите и вернет сумму этажей, которые вы проедете.
//Примеры:
//elevatorDistance([5, 2, 8]) = 9
//elevatorDistance([1, 2, 3]) = 2
//elevatorDistance([7, 1, 7, 1]) = 18

function elevatorDistance(arr) {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(Math.abs(arr[i] - arr[i - 1]));
    }
    const distance = result.reduce((sum, item) => sum + item, 0);
    return distance;
}

console.log(elevatorDistance([5, 2, 8])); // 9
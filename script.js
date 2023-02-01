//Meeting
//
//Джон пригласил на встречу друзей и записал их в список в таком формате:
//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//
//Сделайте все буквы в строке заглавными и отсортируйте друзей по алфавиту.
//
//Результат будет такой:
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(str) {
    const arr = str.split(';').map(item => item.split(':').reverse().map(val => val.toUpperCase())).sort(surnamesSort);
    const friends = {};
    const set = new Set();

    // оставляем уникальные фамилии
    arr.forEach(item => set.add(item[0]));
    //console.log(set);

    // записываем в объект пары фамилия - массив имен с такой фамилией 
    for (let value of set) {
        friends[value] = arr.filter(item => item[0] === value).map(item => item[1]).sort();
    }
    //console.log(friends);

    let result = '';
    for (let surname of Object.keys(friends)) {
        result += friends[surname].map(name => `(${surname}, ${name})`).join('');
    }
    return result;

    // сортровка по фамилии
    function surnamesSort(x, y) {
        if (x[0] < y[0]) {
            return -1;
        }
        if (x[0] > y[0]) {
            return 1;
        }
        return 0;
    }
}

console.log(meeting(s));
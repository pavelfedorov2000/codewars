//Проследите за шпионом

//Вы выслеживаете агента.Он путешествует от места к месту, пытаясь замести следы.Вам дан массив из его перемещений, который дан в некорректном порядке.Вам //нужно восстановить порядок и вернуть строку из мест, которые посетил агент в правильном порядке.
//
//Пример:
//Данные маршруты
//[[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]
//Результат
//"USA, BRA, UAE, JPN, PHL"

function findRoutes(routes) {
    const from = routes.map(route => route[0]);
    const to = routes.map(route => route[1]);
    const start = from.filter(item => !to.includes(item))[0];
    const startRoute = routes.filter(route => route[0] === start)[0];

    let current = startRoute[1];
    let result = [];

    result.push(...startRoute);
    routes.splice(routes.indexOf(startRoute), 1);

    while (routes.length > 0) {
        const nextArr = routes.filter(item => item[0] === current)[0];
        routes.splice(routes.indexOf(nextArr), 1);

        if (nextArr !== undefined) {
            current = nextArr[1];
            result.push(current);
        }
    }

    return result.join(', ');
}

console.log(findRoutes([['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']])); //"USA, BRA, UAE, JPN, PHL"
console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]])); // MNL, TAG, CEB, TAC, BOR
console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]])); // UK, GER, BEL, CAN
console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));
console.log(findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]])); // USA, BRA, KSA, UAE, JPN, PHL 
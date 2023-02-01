// Настоящий этаж
//
// Американцы - странные люди и этажи у них нумеруются не как у людей. Первый этаж у них является нулевым и отсутствует 13 этаж из-за суеверий. Создайте функцию, которая будет переводить номер этажа из американской системы в европейскую.
//
//Примеры:
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function floorTranformation(americanFloor) {
    let europeanFloor;

    if (americanFloor < 0) {
        europeanFloor = americanFloor;
    } else if (americanFloor == 0 || americanFloor == 1) {
        europeanFloor = 0;
    } else if (americanFloor > 1 && americanFloor < 13) {
        europeanFloor = americanFloor - 1;
    } else if (americanFloor == 13) {
        europeanFloor = null;
    } else {
        europeanFloor = americanFloor - 2;
    }
    return europeanFloor;
}

console.log(floorTranformation(15)); // 13
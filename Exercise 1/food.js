//Food Functional
const vegetarian = {
    '0x1F41F': '0x1F363',
    '0x1F954': '0x1F35F',
    '0x1F33D': '0x1F37F',
    '0x1F95A': '0x1F373'

}
const normal = {
    '0x1F404': '0x1F354',
    '0x1F416': '0x1F953',
    '0x1F413': '0x1F357',
}

function cookFood(array) {
    return array.map((food) => {
        if (vegetarian[food] != undefined)
            return String.fromCodePoint(vegetarian[food]);
        else
            return String.fromCodePoint(normal[food]);
    });
}
console.log('Cooked food ' + cookFood(['0x1F954', '0x1F404', '0x1F416']));

function isVegetarian(array) {
    return array.filter((food) => Object.values(vegetarian).indexOf(food) != -1)
        .map((food) => String.fromCodePoint(food));
}
console.log('Vegetarian food ' + isVegetarian(['0x1F357', '0x1F37F', '0x1F363']));

function eatCookedFood(array) {
    let canEat = array.reduce((prev, curr) => {
        if (Object.values(vegetarian).indexOf(curr) != -1 || Object.values(normal).indexOf(curr) != -1) {
            if (prev == '')
                prev = '0x1F924'
        } else
            prev = '0x1F922'
        return prev;
    }, '');
    return String.fromCodePoint(canEat);
}
console.log('Can eat food ' + eatCookedFood(['0x1F357', '0x1F953', '0x1F354']));

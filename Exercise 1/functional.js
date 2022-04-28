//Small Functional Exercises
function getMostFrequent(array) {
    let frequency = array.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev
    }, {});
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log('The most frequent element is ' + getMostFrequent(arr));

function sumOfSquares(array) {
    let sum = array.reduce((prev, curr) => prev += Math.pow(curr, 2), 0);
    return sum;
}
let arr1 = [0, 1, 2, 3, 4];
console.log('The sum of squares is ' + sumOfSquares(arr1));

function filterValues(array) {
    let filtered = array.filter((element) => element != (0 && null && '""' && false) && element != undefined && !isNaN(element));
    return filtered;
}
let arr2 = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log('The filtered values are ' + filterValues(arr2));
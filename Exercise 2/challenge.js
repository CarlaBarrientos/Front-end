const array = [1, 2, 4, 7, 4, 2, 1, 3, 3, 5]
function findUnique(array) {
    return array.reduce((prev, acc) => {
        if (prev.includes(acc))
            prev.splice(prev.indexOf(acc), 1);
        else
            prev.push(acc);
        return prev;
    }, []);
}
console.log(findUnique(array));

array.reduce((t, i) => t ^ i);

let promise = new Promisefunction((resolve, reject) {
    resolve(1)
    setTimeout(() => resolve(2), 1000)
});

promise.then(alert);
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve, ms)
    })
}
delay(3000).then(() => alert('runs after 3 seconds'));

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve.then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7)
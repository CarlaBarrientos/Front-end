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
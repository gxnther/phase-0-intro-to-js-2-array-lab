let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name) ;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let appendArray = [...cats, name];
    return appendArray;
}

function prependCat(name) {
    let prependArray = [name, ...cats];
    return prependArray;
}

function removeLastCat() {
    let byeLastCat = cats.slice(0, -1);
    return byeLastCat;
}

function removeFirstCat() {
    let byeFirstCat = cats.slice(1);
    return byeFirstCat;
}
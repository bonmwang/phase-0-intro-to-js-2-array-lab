let cats = ["Milo", "Otis", "Garfield"];

console.log("Initial cats array:", cats);

// 1.Destructive Functions --> These functions modify teh original cats array.
// These functions modify the original cats array.
// push(), adds an element to the end of the array.
// unshift(), adds an element to the begining of the array.
// pop(), removes the last element from the array.
// shift(), removes teh first element from the array.

// 2.Non-destructive functions --> These functions return a new array without modifying the original cats array.
// The spread operator (...) is used to create a new array with the added or removed elements.
// slice() is used to create a new array without the first or last element.

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
console.log("After destructivelyAppendCat:", cats);

function destructivelyPrependCat(Whiskers) {
    cats.unshift(Whiskers);
}
console.log("After destructuvelyPrependCat:", cats);

function destructivelyRemoveLastCat() {
    cats.pop();
}
console.log("After destructivelyRemoveLastCat:", cats);

function destructivelyRemoveFirstCat() {
    cats.shift();
}
console.log("After destructivelyRemoveFirstCat:", cats);

function appendCat(Broom) {
    return [...cats, Broom];
}
console.log("After appendCat (new array):", cats);

function prependCat(Tom) {
    return [Tom, ...cats];
}
console.log("Original cats array (unchanged):", cats);

function removeLastCat() {
    return cats.slice(0, -1);
}
console.log("After removeLastCat(new array):", cats);

function removeFirstCat() {
    return cats.slice(1);
}
console.log("After removeFirstCat (new array):", cats);

// Non Destructive Functions 
console.log("Original cats array (unchaged):", cats);
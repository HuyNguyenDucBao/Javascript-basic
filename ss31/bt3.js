function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}
console.log(confirmEnding("Hello world", "world"));
console.log(confirmEnding("Hello world", "orld"));
console.log(confirmEnding("Hello world", "world2"));
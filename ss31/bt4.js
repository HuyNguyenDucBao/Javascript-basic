function truncate(str, n) {
    if (str.length <= n) {
        return str;
    }
    return str.slice(0, n) + '...';
}

var result = truncate("Hello, world!", 5);
console.log(result);  
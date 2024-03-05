function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return {word: longestWord, length: longestWord.length};
}

var result = findLongestWord("Đây là một câu ví dụ");
console.log(`Từ dài nhất: ${result.word}, Độ dài: ${result.length}`);
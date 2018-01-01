// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charCount = {};
    let maxChar = '';
    let max = 0;

    str.split('').forEach((char) => charCount[char] = charCount[char] + 1 || 1);

    for (let char in charCount) {
        if (charCount[char] > max) {
            max = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChar('Hello There!'));

module.exports = maxChar;

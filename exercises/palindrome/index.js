// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let palindrome = false;

    str.split('').some((char, i, strArr) => {
        if (char !== strArr[strArr.length - i -1]) {
            palindrome = false;
            return true;
        } else {
            palindrome = true;
            if (i === Math.floor(strArr.length / 2)) {
                return true;
            }
        }
    });

    return palindrome;
}

palindrome("aaacbcaaa")

module.exports = palindrome;

// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
//     return str.split('').every((char, i, strArr) => char === strArr[strArr.length - i - 1])
// }
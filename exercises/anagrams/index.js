// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return sortStr(stringA) === sortStr(stringB);
}

function sortStr(str) {
    return str.toLowerCase().replace(/\W/g, '').split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const charCountA = countChar(stringA);
//     const charCountB = countChar(stringB);
//
//     const charMeasureA = Object.keys(charCountA);
//     const charMeasureB = Object.keys(charCountB);
//
//     if (charMeasureA.length === charMeasureB.length) {
//         return charMeasureA.every((char) => charCountA[char] === charCountB[char]);
//     }
//
//     return false;
// }
//
// function countChar(str) {
//     const charCount = {};
//     const tempStr = str.toLowerCase().replace(/\W/g, '');
//
//     for (let char of tempStr) {
//         charCount[char] = charCount[char] + 1 || 1;
//     }
//
//     return charCount;
// }
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let totalStrLength = n * 2 - 1;

    for (let i = 1; i <= n; i++) {
        let log = '';

        let rowHashTag = i * 2 - 1;
        let emptySpaces = (totalStrLength - rowHashTag) / 2;

        for (let y = 1; y <= totalStrLength; y++) {
            if (y <= emptySpaces || y > emptySpaces + rowHashTag) {
                log += ' ';
            } else {
                log += '#';
            }
        }

        console.log(log);
    }
}

module.exports = pyramid;

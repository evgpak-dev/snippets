```js
/**
 * Generates lowercase or uppercase alphabet arrays
 * 
*/

// English alphabet
function createEnglishAlphabet(letterCase = 'lowercase') {
  if (letterCase === 'lowercase') {
    return [...Array(26)].map((_, i) => String.fromCodePoint(i + 97));
  }

  if (letterCase === 'uppercase') {
    return [...Array(26)].map((_, i) => String.fromCodePoint(i + 65));
  }
}

// Russian alphabet
function createRussianAlphabet(letterCase = 'lowercase') {
  if (letterCase === 'lowercase') {
    const arr = [...Array(32)].map((_, i) => String.fromCodePoint(i + 1072));
    return arr.toSpliced(6, 0, String.fromCodePoint(1105));
  }

  if (letterCase === 'uppercase') {
    const arr = [...Array(32)].map((_, i) => String.fromCodePoint(i + 1040));
    return arr.toSpliced(6, 0, String.fromCodePoint(1025));
  }
}

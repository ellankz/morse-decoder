const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const encodedArr = sliceExpression(expr, 10);
  return encodedArr.map(decodeLetter).join('');
}

function decodeLetter(expr) {
  if (expr === '**********') {
    return ' ';
  }
  const pairsArr = sliceExpression(expr, 2);
  const morse = pairsArr.map(getMorse).join('');
  return MORSE_TABLE[morse];
}

function sliceExpression(expr, sliceLength) {
  const arr = [];
  for (let i = 0; i < expr.length; i += sliceLength) {
    arr.push(expr.slice(i, i + sliceLength));
  }
  return arr;
}

function getMorse(pair) {
  if (pair === '10') {
    return '.';
  }
  if (pair === '11') {
    return '-';
  }
  return '';
}

module.exports = {
  decode,
};

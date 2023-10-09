const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arrExpr = [];
    for (let i=0; i < expr.length; i+=10){
        arrExpr.push(expr.substring(i, i + 10));
    }


    let arrExprToMorse = [];
arrExpr.forEach(element => { 
    let itemMorse = "";
    for (let i=0; i < element.length; i+=2){
        let n = element[i] + element[i + 1];
        if (n === '00') {
            itemMorse = itemMorse + '';
        } else if (n === '10') {
            itemMorse = itemMorse + '.';
        } else if (n === '11'){
            itemMorse = itemMorse + '-';
        } else {
            itemMorse = ' ';
        }
    }
    arrExprToMorse.push(itemMorse);
});

let result = "";
arrExprToMorse.forEach(element => {
    result = MORSE_TABLE[element] ? result + MORSE_TABLE[element] : result + ' ';
});
return result;



}

module.exports = {
    decode
}
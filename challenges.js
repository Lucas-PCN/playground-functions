// Desafio 1
function compareTrue(p1, p2) {
  let answer = false;
  if (p1 === true && p2 === true) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(array) {
  let spaceVirgula = ', ';
  let string = array[array.length - 1] + spaceVirgula + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= maiorNumero) {
      maiorNumero = array[i];
    }
  }
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mousePosition, cat1Position, cat2Position) {
  let distanciaCat1Mouse = mousePosition - cat1Position;
  let distanciaCat2Mouse = mousePosition - cat2Position;
  let modDistanciaCat1Mouse = Math.abs(distanciaCat1Mouse);
  let modDistanciaCat2Mouse = Math.abs(distanciaCat2Mouse);

  if (modDistanciaCat1Mouse > modDistanciaCat2Mouse) {
    return 'cat2';
  }
  if (modDistanciaCat2Mouse > modDistanciaCat1Mouse) {
    return 'cat1';
  }
  if (modDistanciaCat1Mouse === modDistanciaCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if ((numbers[i]) % 3 === 0 && (numbers[i]) % 5 === 0) {
      array.push('fizzBuzz');
    } else if ((numbers[i]) % 3 === 0) {
      array.push('fizz');
    } else if ((numbers[i]) % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      newString += 1;
    } else if (string[i] === 'e') {
      newString += 2;
    } else if (string[i] === 'i') {
      newString += 3;
    } else if (string[i] === 'o') {
      newString += 4;
    } else if (string[i] === 'u') {
      newString += 5;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
function decode(newString) {
  let string = '';
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] == 1) {
      string += 'a';
    } else if (newString[i] == 2) {
      string += 'e';
    } else if (newString[i] == 3) {
      string += 'i';
    } else if (newString[i] == 4) {
      string += 'o';
    } else if (newString[i] == 5) {
      string += 'u';
    } else {
      string += newString[i];
    }
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

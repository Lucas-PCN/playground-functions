// Desafio 10
function techList(array, name) {
  let orderedArray = array.sort();
  let newArray = [];
  let obj = {};
  for (let i = 0; i < orderedArray.length; i += 1) {
    obj['tech'] = orderedArray[i];
    obj['name'] = name;
    newArray.push(obj);
    obj = {};
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  } else {
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let key of array) {
    if (key < 0 || key > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    let contagemRepetido = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[index] == array[i]) {
        contagemRepetido += 1;
      }
      if (contagemRepetido > 2) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    } 
  }

  let phoneNumber = 
  '(' +
  array[0] +
  array[1] +
  ') ' +
  array[2] +
  array[3] +
  array[4] +
  array[5] +
  array[6] +
  '-' +
  array[7] +
  array[8] +
  array[9] +
  array[10];

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineA - lineB) || lineA < Math.abs(lineA - lineC) || lineB < Math.abs(lineB - lineA) || lineB < Math.abs(lineB - lineC) || lineC < Math.abs(lineC - lineA) || lineC < Math.abs(lineC - lineB)) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  //Copiado de https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  let numbers = string.match(/\d+/g).map(Number);
  let copos = 0;
  for (let key of numbers) {
    copos += key;
  }
  if (copos === 1) {
    return copos + " copo de água";
  } else {
    return copos + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

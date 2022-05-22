/* 1. Creați o funcție care primește ca și parametru un număr și 
returnează dublul său dacă numărul primit este impar, 
altfel returnează numărul scăzut cu 2 dacă este par. 
Afișați rezultatul în consolă. */

const oddOrEvenCheck = (num) => {
  if (num % 2 === 0) {
    return num - 2;
  } else {
    return num * 2;
  }
};

console.log(oddOrEvenCheck(5));

/* 2. Creați o funcție care stochează intr-un array 
doar numerele prime dintr-un array primit ca si parametru. 
Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.
Ex:
const arr = [1,2,3,4,5,6,7,8,9];
savePrimes(arr) => [1,2,3,5,7]; */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(arr.filter(isPrime));

/* 3. Creați o funcție care stochează intr-un array doar strings 
dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. 
Afișați rezultatul în consola.
Ex:
saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]
saveStrings([1,2,3,4]) -> []
saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’] */

const checkString = (arr) => {
  const stringArr = new Array();
  arr.forEach((element) => {
    if (typeof element === 'string') stringArr.push(element);
  });
  return stringArr;
};

console.log(checkString([1, 'a', 'b', 3, true, false]));

/* 4. Creați o funcție care adună cifrele impare ale unui număr primit
 ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”. 
Ex:
	addDigits(“1523”) => 9
    Hint: pentru a transforma un caracter/string în număr folosiți operatorul cast.
    JavaScript Type Conversions (w3schools.com) */

function sumOddNum(data) {
  let oddNr = 0;
  for (let i = 0; i < data.length; i++) {
    const nr = parseInt(data[i]);
    if (nr % 2 === 0) {
      continue;
    }
    {
      oddNr += nr;
    }
  }
  return oddNr;
}

console.log(sumOddNum('123456'));

/* 5. Creați un switch cu cel puțin 5 case-uri 
din care cel puțin 2 să aibă același rezultat,
 după exemplul prezentat la curs. */

const checkStock = 'Cherries';
switch (checkStock) {
  case 'Cherries':
    console.log('We have cherries. Yeay!');
    break;
  case 'Spinach':
  case 'Salad':
    console.log('Spinach, Salad is out of stock.');
    break;
  case 'Potatoes':
    console.log('Out of stock, until tomorrow.');
  case 'Tomatoes':
    console.log('Out of stock, until the end of June.');
  default:
    console.log(`Sorry, I don't understand: ${checkStock}.`);
}

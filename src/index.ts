
const [arg1, arg2] :string[] = process.argv.slice(2);
const primeArray = [];
const a = Number(arg1);
const b = Number(arg2);

if (!arg1 || !arg2) { //проверка правильности аргументов
  console.log(("Должно быть 2 аргументы"));
} else if (arg1 > arg2) {
  console.log(("arg1 не может быть больше, чем arg2"));
} else {
  for (let i = a; i <= b; i ++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  if (primeArray.length === 0) {
    console.log(("Интервал не содержит простые числа"));
  } 
}

function isPrime(num :number) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0 || num % (j + 1) === 0) {
      return false;
    } else {
      return num ;
    }
  }
}
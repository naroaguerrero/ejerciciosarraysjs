let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let num;
let interruptor;

do {
  num = parseInt(window.prompt("Introduce un número"));
  if (num >= 0 && num <= 9) {
    array[num] = array[num] * 2;
    console.log(`El valor de la posición ${num} es ${array[num]}`);
  } else {
    console.log(`El número está fuera del ranfo del array`);
  }
} while (num >= 0 && num <= 0);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;

for (let i = 0; i < array.length; i++) {
  suma += array[1];
}

document.getElementById("div").innerHTML = `La media es ${suma / array.length}`;

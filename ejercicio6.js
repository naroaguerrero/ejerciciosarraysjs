let array = [];

for (let i = 0; i < 3; i++) {
  array[i] = parseInt(window.prompt("Introduce un número"));
}

if (array[0] < array[1] && array[0] < array[2]) {
  document.getElementById("div").innerHTML = `El menos es ${array[0]}`;
} else if (array[1] < array[0] && array[1] < array[2]) {
  document.getElementById("div").innerHTML = `El menos es ${array[1]}`;
} else {
  document.getElementById("div").innerHTML = `El menos es ${array[2]}`;
}

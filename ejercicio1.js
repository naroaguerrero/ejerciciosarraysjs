let array = [1,2,3,4,5,6,7,8,9,10]

let parrafos = ""

for(let i = 0;  i< array.length; i++){
    parrafos += `<p> ${array[i]}</p>`
}

document.getElementById("div").innerHTML = parrafos

"use strict";
const angka2 = Number(prompt());
const output2 = document.getElementById("output2");
if (angka2 && output2) {
    for (let i = angka2; i > 0; i--) {
        output2.innerHTML += String(i) + "<br>";
    }
}

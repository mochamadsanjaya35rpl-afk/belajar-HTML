"use strict";
const angka4 = Number(prompt());
const output4 = document.getElementById("output4");
if (angka4 && output4) {
    let i = 1;
    while (i <= angka4) {
        output4.innerHTML += String(i) + "<br>";
        i++;
    }
}

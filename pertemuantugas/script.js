"use strict";
let angka1 = Number(prompt());
let output1 = document.getElementById("output1");
if (angka1 && output1) {
    for (let i = 2; i <= angka1; i += 2) {
        output1.innerHTML += String(i) + "<br>";
    }
}

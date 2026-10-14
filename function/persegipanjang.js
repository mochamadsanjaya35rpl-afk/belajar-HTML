"use strict";
//keliling & luas persegi panjang//
function keliling(p, l) {
    return p + l;
}
function luas(p, l) {
    return 2 * (p + l);
}
//panjang & lebar persegi panjang//
let kelwilwing = keliling(20, 10);
let luwas = luas(20, 10);
const output1 = document.getElementById('output');
output1.innerHTML += `p: 20<br>`;
output1.innerHTML += `l: 10<br>`;
output1.innerHTML += `<br>keliling nya adalah ${kelwilwing}<br>`;
output1.innerHTML += `luas nya adalah ${luwas}`;

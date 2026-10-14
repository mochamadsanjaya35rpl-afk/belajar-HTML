"use strict";
let angka1 = prompt(`masukkan angka 1`);
let angka2 = prompt(`masukkan angka 2`);
let operasi = prompt(`masukkan operasi bilangan`);
const tambah2 = (a, b) => a + b;
const kurang2 = (a, b) => a - b;
const bagi = (a, b) => a / b;
const kali = (a, b) => a * b;
const a = Number(angka1);
const b = Number(angka2);
let HASIL;
switch (operasi) {
    case "+":
        HASIL = tambah2(a, b);
        break;
    case "-":
        HASIL = kurang2(a, b);
        break;
    case "/":
        HASIL = b === 0 ? 'tidak bisa dibagi 0' : bagi(a, b);
        break;
    case "*":
        HASIL = kali(a, b);
        break;
    default:
        HASIL = 'operator tidak dikenal';
}
const output = `${a} ${operasi} ${b}= ${HASIL}`;
console.log(output);
document.body.innerHTML += `<h2> ${output} </h2>`;

"use strict";
function tambah(a, b) {
    return a + b;
}
const tambah1 = (a, b) => a + b;
function namaSiswa(nama) {
    return `nama siswa adalah ${nama}`;
}
//arrow function
const namaSiswa1 = (nama) => `nama siswa adalah ${nama}`;
let hasil2 = tambah(10, 3);
let hasil1 = namaSiswa('andi');
let hasil3 = tambah1(12, 5);
let hasil4 = namaSiswa1('wira');
const output = document.getElementById('output');
output.innerHTML += `hasil perjumlahan adalah ${hasil2} <br>`;
output.innerHTML += `${hasil1} <br>`;
output.innerHTML += `hasil perjumlahan adalah ${hasil3} <br>`;
output.innerHTML += `${hasil4} <br>`;
//void function
function kurang(a, b) {
    output.innerHTML += `Hasil pengurangan ${a - b} <br>`;
}
const kurang1 = (a, b) => {
    output.innerHTML += `Hasil pengurangan ${a - b} <br>`;
};
function kelasSiswa(kelas) {
    output.innerHTML += `kelas siswa ${kelas} <br>`;
}
const kelasSiswa1 = (kelas) => {
    output.innerHTML += `kelas siswa ${kelas} <br>`;
};
kurang(10, 4);
kelasSiswa('X RPL 3');
kurang1(12, 5);
kelasSiswa1('X TKJ 3');

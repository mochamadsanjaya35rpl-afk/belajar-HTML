"use strict";
const angka5 = Number(prompt());
const table2 = document.getElementById("table");
if (angka5 && table2) {
    let i = 0;
    while (i < 10) {
        i++;
        const tr = document.createElement("tr");
        const perkalian = document.createElement("td");
        const hasil = document.createElement("td");
        perkalian.innerHTML = String(angka5) + " x " + String(i);
        hasil.innerHTML = String(angka5 * i);
        tr.append(perkalian, hasil);
        table2.append(tr);
    }
}

const angka3: number = Number(prompt());
const table: HTMLElement | null = document.getElementById("table");

if (angka3 && table){
    for (let i:number = 1; i<=10; i++){
        const tr = document.createElement("tr");
        const perkalian = document.createElement("td");
        const hasil = document.createElement("td");
        perkalian.innerHTML = String(angka3)+" x "+String(i);
        hasil.innerHTML = String(angka3*i);
        tr.append(perkalian, hasil);
        table.append(tr)
    }
}
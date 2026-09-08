const angka4: number = Number(prompt());
const output4: HTMLElement | null = document.getElementById("output4");

if (angka4 && output4) {
    let i: number = 1;
    while (i<=angka4){
        output4.innerHTML += String(i)+"<br>";
        i++;
    }
}
const angka2: number = Number(prompt());
const output2: HTMLElement | null = document.getElementById("output2");

if (angka2 && output2) {
    for (let i:number = angka2; i > 0; i--){
        output2.innerHTML += String(i)+"<br>";
    }
}
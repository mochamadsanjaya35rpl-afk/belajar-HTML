//keliling & luas persegi panjang//
function keliling(p:number, l:number): number{
    return p+l;
} 
function luas(p:number, l:number): number {
    return 2*(p+l);
}
//panjang & lebar persegi panjang//
let kelwilwing: number = keliling(20, 10)
let luwas: number = luas(20, 10)
const output1= document.getElementById('output') as HTMLElement
output1.innerHTML+=`p: 20<br>`
output1.innerHTML+=`l: 10<br>`
output1.innerHTML+=`<br>keliling nya adalah ${kelwilwing}<br>`;
output1.innerHTML+=`luas nya adalah ${luwas}`;

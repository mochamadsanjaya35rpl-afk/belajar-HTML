function tambah(a:number, b:number):number {
    return a+b; 
}
const tambah1 = (a:number, b:number): number => a+b;
function namaSiswa(nama:string):string {
    return `nama siswa adalah ${nama}`;
}
//arrow function
const namaSiswa1 = (nama: string): string =>`nama siswa adalah ${nama}`;

let hasil2: number =tambah(10,3);
let hasil1: string = namaSiswa('andi');
let hasil3: number = tambah1(12, 5);
let hasil4: string = namaSiswa1('wira');
const output= document.getElementById('output') as HTMLElement;
output.innerHTML += `hasil perjumlahan adalah ${hasil2} <br>`;
output.innerHTML += `${hasil1} <br>`;
output.innerHTML += `hasil perjumlahan adalah ${hasil3} <br>`;
output.innerHTML += `${hasil4} <br>`;
//void function
function kurang (a:number, b:number): void {
    output.innerHTML+=`Hasil pengurangan ${a-b} <br>`;
}
const kurang1 = (a:number, b:number): void => {
    output.innerHTML+=`Hasil pengurangan ${a-b} <br>`;
} 
function kelasSiswa(kelas:string): void {
    output.innerHTML+=`kelas siswa ${kelas} <br>`;
}
const kelasSiswa1 = (kelas:string): void => {
    output.innerHTML+=`kelas siswa ${kelas} <br>`;
}
kurang(10, 4);
kelasSiswa('X RPL 3');
kurang1(12, 5);
kelasSiswa1('X TKJ 3');
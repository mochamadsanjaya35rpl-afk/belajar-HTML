let angka1: number=Number(prompt())
let output1: HTMLElement|null=document.getElementById("output1")


if (angka1 && output1) {
    for( let i: number= 2; i<= angka1; i+=2){
        output1.innerHTML+= String(i)+"<br>"
    }
}
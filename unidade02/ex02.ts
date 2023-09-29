//P.2.2. Desenvolva um programa recursivo que calcule o elemento com o maior valor absoluto presente em um array não ordenado. 


let b: number[] = [1,51, 10, 5,-50,-60,49];
console.log("Array original:");
console.log(b);
let maior = maior_r(b);
console.log("O maior número do array é: ", maior);

function maior_r(b: number[]): number{
    if (b.length == 1){
        console.log("Caso base atingido!")
        return b[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando maior_r( ", b.slice(1, b.length), ");");      
        let maior_restante = maior_r(b.slice(1, b.length))
        if (Math.abs(b[0]) >= Math.abs(maior_restante)){
            return b[0];
        }
        else{ 
            return maior_restante;
        }
    }
}

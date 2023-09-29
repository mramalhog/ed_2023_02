//P.2.1. Desenvolva um programa recursivo para calcular o menor elemento presente em um array não ordenado. 

let a: number[] = [1, 4, 10, 20, -1];
console.log("Array original:");
console.log(a);
let menor = menor_r(a);
console.log("O menor número do array é: ", menor);

function menor_r(a: number[]): number{
    if (a.length == 1){
        console.log("Caso base atingido!")
        return a[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando menor_r( ", a.slice(1, a.length), ");");      
        let menor_restante = menor_r(a.slice(1, a.length))
        if (a[0] <= menor_restante){
            return a[0];
        }
        else{ 
            return menor_restante;
        }
    }
}
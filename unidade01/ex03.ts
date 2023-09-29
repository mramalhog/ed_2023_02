// P.1.3 Escreva um programa, em TypeScript, que solicite que o usuário digite dois números e imprima o maior deles. 

class Maior {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    print(){
        if (this.x<this.y){
            console.log(`Número ${this.y} é maior`);
        }
        else{
            console.log(`Número ${this.x} é maior`);
        }
    }
    
}

const teste = new Maior(3,1);
teste.print();
// P.1.4. Escreva um programa, em TypeScript, que solicite que o usuário digite duas letras e diga qual delas vem antes e qual vem depois no alfabeto.

class Antes {
    a: string;
    b: string;
    
    constructor(a: string, b: string) {
      this.a = a;
      this.b = b;
    }

    print_mrg(){
        if (this.a<this.b){
            console.log(`Letra ${this.a} é anterior a ${this.b}`);
        }
        else{
            console.log(`Letra ${this.b} é anterior a ${this.a}`);
        }
    }
    
}

const teste2 = new Antes("F","D");
teste2.print_mrg();
//P.1.6. Repita o exercício P.1.5 mas utilizado operadores relacionais ao invés do método charCodeAt(). 

class Dicionario {
    c: string;
    d: string;
    
    constructor(c: string, d: string) {
      this.c = c;
      this.d = d;
    }

    print(){
        if (this.c<this.d){
            console.log(`Palavra ${this.c} é anterior a ${this.d}`);
        }
        else{
            console.log(`Palavra ${this.d} é anterior a ${this.c}`);
        }
    }
    
}

const teste3 = new Dicionario("amor","arroz");
teste3.print();
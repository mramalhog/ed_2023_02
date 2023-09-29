//. Escreva um programa, em TypeScript, que solicite que o usuário digite duas palavras e diga qual delas aparece antes da outra no dicionário

class Dicionario1 {
  e: string;
  f: string;

  constructor(e: string, f: string) {
    this.e = e;
    this.f = f;
  }

  comparar() {
    for (let i = 0; i < this.e.length && i < this.f.length; i++) {
      const a = this.e.charCodeAt(i);
      const b = this.f.charCodeAt(i);
    }
  }

  print() {
    if (this.e < this.f) {
      console.log(`Palavra ${this.e} é anterior a ${this.f}`);
    } else {
      console.log(`Palavra ${this.f} é anterior a ${this.e}`);
    }
  }
}

const teste4 = new Dicionario1("amor", "arroz");
teste4.print();

//O programa não deve solicitar nenhuma informação adicional por parte do usuário e supõe que as palavras são escritas somente com caracteres de ‘a’ a ‘z’. Para esse caso, especifique, também, o algoritmo em pseudocódigo, conforme notação explicada em sala de aula. Utilize o método de string charCodeAt().

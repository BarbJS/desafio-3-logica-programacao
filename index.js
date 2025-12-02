//Escrevendo as classes de um Jogo de Aventura

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        // Saída do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
}

// --- Área de Testes ---

// Criando objetos (Instanciando a classe Heroi)
const heroi1 = new Heroi('Aragorn', 87, 'Guerreiro');
const heroi2 = new Heroi('Gandalf', 2019, 'Mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'Monge');
const heroi4 = new Heroi('Hanzo', 25, 'Ninja');

// Array de heróis para testar o laço de repetição
const grupoDeHerois = [heroi1, heroi2, heroi3, heroi4];

console.log("--- Iniciando Batalha ---\n");

// Laço de repetição para iterar sobre os objetos e chamar o método atacar
for (let i = 0; i < grupoDeHerois.length; i++) {
    grupoDeHerois[i].atacar();
}
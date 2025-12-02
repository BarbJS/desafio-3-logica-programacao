# 🏰 Desafio de Projeto 03: Classes de um Jogo

Este repositório contém a resolução do desafio de código proposto pela **DIO (Digital Innovation One)**, focado em lógica de programação e Orientação a Objetos.

## 🎯 Objetivo

O objetivo do projeto é criar uma classe genérica que represente um herói de uma aventura, contendo propriedades específicas e um método de ataque que varia de acordo com o tipo do herói.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Node.js** (para execução do script)

## 📋 Requisitos do Desafio

O código utiliza os seguintes conceitos fundamentais:
- **Variáveis**: Armazenamento de dados.
- **Operadores**: Concatenação de strings.
- **Laços de repetição**: Iteração sobre múltiplos objetos heróis.
- **Estruturas de decisões**: `Switch/Case` para determinar o ataque baseado no tipo.
- **Funções/Métodos**: Comportamento da classe (`atacar`).
- **Classes e Objetos**: Estrutura principal do herói.

## ⚙️ Como o Script Funciona

A classe `Heroi` possui o seguinte construtor: constructor(nome, idade, tipo)

No método `atacar`, foi utilizada a estrutura `switch` para tornar o código mais legível e performático já que há múltiplas opções de verificação para uma mesma variável (neste caso, `this.tipo`). Também adicionei `.toLowerCase()` para garantir que, mesmo que você digite "GUERREIRO", o código entenda corretamente o herói. O método `atacar()` verifica a propriedade tipo e imprime a mensagem correspondente: 

Tipo       |      Ataque
Mago           Usou magia
Guerreiro      Usou espada
Monge          Usou artes marciais
Ninja          Usou shuriken

Exemplos de saída após execução:

- O Guerreiro atacou usando usou espada!
- O Mago atacou usando usou magia!
- O Monge atacou usando usou artes marciais!
- O Ninja atacou usando usou shuriken!

## 🚀 Como executar

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório.

3. Navegue até a pasta do projeto no terminal.

4. Execute o comando via Bash: node index.js.

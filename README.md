# Game Boy Pokedex

Implementação de uma Pokédex num Game Boy "de verdade".

A ideia desse projeto é conseguir criar somente com CSS um Game Boy "funcional". Onde na tela será mostrado uma lista de Pokémons simulando uma Pokédex.

A parte "funcional" do Game Boy seria o seu uso, onde o usuário só pode interagir com a Pokédex apertando os botões do Game Boy ou através do teclado.

## Tecnologias utilizadas

* [Vue](https://vuejs.org/)
* [Axios](https://github.com/axios/axios)

## Usando o APP

Para usar online acesse: https://game-boy-pokedex.vercel.app/

Para usar localmente, clone o repositório, vá na pasta criada e execute os comandos:

```
npm install
npm run serve
```

Com o APP aberto, você terá que usar a interface do Game Boy para interagir. O significado dos botões da interface segue abaixo:

| Botão       | Significado            | Atalho no teclado |
| :---------- | :--------------------- | :---------------- |
| D-Pad UP    | Move para cima         | ARROW UP          |
| D-Pad DOWN  | Move para baixo        | ARROW DOWN        |
| D-Pad LEFT  | Move para esquerda     | ARROW LEFT        |
| D-Pad RIGHT | Move para direita      | ARROW RIGHT       |
| B           | Ação de voltar         | Z                 |
| A           | Ação de selecionar     | X                 |
| START       | Ação de start do menu  | ENTER             |
| SELECT      | Ação de select do menu | SHIFT             |

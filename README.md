# Game Boy Pokedex

Implementação de uma Pokédex num Game Boy.

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

Com o APP aberto, você terá que usar a interface do Game Boy ou o teclado para interagir.

O significado dos botões da interface segue abaixo na tabela:

| Botão       | Atalho no teclado | Significado            |
| :---------- | :---------------- | :--------------------- |
| D-Pad UP    | ↑                 | Move para cima         |
| D-Pad DOWN  | ↓                 | Move para baixo        |
| D-Pad LEFT  | ←                 | Move para esquerda     |
| D-Pad RIGHT | →                 | Move para direita      |
| B           | z                 | Ação de voltar         |
| A           | x                 | Ação de confirmar      |
| START       | ENTER             | Ação de start do menu  |
| SELECT      | SHIFT             | Ação de select do menu |

### Modo secreto

Para ativar/desativar o modo secreto primeiro aperte `SELECT`, depois aperte:

`↑ ↑ ↓ ↓ ← → ← → B A`

## Licença

Esse projeto está sob a [licença MIT](LICENSE).

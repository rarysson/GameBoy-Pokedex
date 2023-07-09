# Game Boy Pokedex

Implementation of a Pokédex on a Game Boy.

The idea of this project is to be able to create a "functional" Game Boy with only CSS. Where on the screen will be shown a list of Pokémons simulating a Pokédex.

The "functional" part of the Game Boy would be its use, where the user can only interact with the Pokédex by pressing the Game Boy buttons or using the keyboard.

## Stack

* [Vue](https://vuejs.org/)
* [Axios](https://github.com/axios/axios)

## Using the APP

To use right away go here: https://game-boy-pokedex.vercel.app/

To run locally, you need to clone the repo, go to the folder that you've created and type these commands:

```
npm install
npm run serve
```

With the APP open you need to use the button from the Game Boy or your keyboard to interact with.

The meaning of the buttons you can see on the table below:

| Button      | Shortcut | Meaning |
| :---------- | :------- | :------ |
| D-Pad UP    | ↑        | Up      |
| D-Pad DOWN  | ↓        | Down    |
| D-Pad LEFT  | ←        | Left    |
| D-Pad RIGHT | →        | Right   |
| B           | z        | Back    |
| A           | x        | Confirm |
| START       | ENTER    | Start   |
| SELECT      | SHIFT    | Select  |

### Secret mode

To enable/disable the secret mode, first, you need to press `SELECT` and then press:

`↑ ↑ ↓ ↓ ← → ← → B A`

### Select a different color for the Game Boy

To enable the color selector mode you need to press `START`.

To select a color just click on the color that you want.

To disable the color selector mode press the sidebar that you've opened.

## License

[MIT](LICENSE).

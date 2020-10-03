import axios from "axios";

const API = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

const local_data = {
    pokemons_total: 0,
    index: 1
};

async function get_pokemons_total() {
    const response = await API.get("pokedex/2/");
    const data = response.data;

    return data.pokemon_entries.length + 1;
}

async function get_pokemon_list() {
    if (local_data.pokemons_total === 0) {
        local_data.pokemons_total = await get_pokemons_total();
    }

    if (local_data.index <= local_data.pokemons_total) {
        const data = [];
        const check_truthy = (i) =>
            i < local_data.index + 10 && i <= local_data.pokemons_total;

        for (let i = local_data.index; check_truthy(i); i++) {
            data.push(API.get(`pokemon/${i}`));
        }

        return Promise.all(data);
    }

    return [];
}

function get_types(types) {
    return types.map((type) => type.type.name);
}

async function get_pokemons() {
    const data = await get_pokemon_list();
    const pokemons = data.map((pokemon) => pokemon.data);

    return pokemons.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        types: get_types(pokemon.types),
        img: pokemon.sprites.front_default,
        img_shiny: pokemon.sprites.front_shiny
    }));
}

export { get_pokemons };

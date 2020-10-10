import axios from "axios";

const API = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
});

const local_data = {
    pokemons_total: 0,
    index: 1,
    pokemons: {}
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
            i < local_data.index + 15 && i < local_data.pokemons_total;

        for (let i = local_data.index; check_truthy(i); i++) {
            data.push(API.get(`pokemon/${i}`));
        }

        local_data.index += 15;

        return Promise.all(data);
    }

    return [];
}

function get_types(types) {
    return types.map((type) => type.type.name);
}

async function get_next_pokemons() {
    const data = await get_pokemon_list();
    const raw_pokemons = data.map((pokemon) => pokemon.data);
    const pokemons = raw_pokemons.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        types: get_types(pokemon.types),
        img: pokemon.sprites.front_default,
        img_shiny: pokemon.sprites.front_shiny
    }));

    const tmp_pokemons = {};

    pokemons.forEach((pokemon) => {
        tmp_pokemons[pokemon.name] = pokemon;
    });

    local_data.pokemons = { ...local_data.pokemons, ...tmp_pokemons };

    return tmp_pokemons;
}

async function get_pokemons() {
    if (Object.keys(local_data.pokemons).length === 0) {
        await get_next_pokemons();
    }

    return local_data.pokemons;
}

async function get_pokemon_description(name) {
    const response = await API.get(`pokemon-species/${name}/`);
    const data = response.data;
    let description;

    for (let i = 0; ; i++) {
        if (data.flavor_text_entries[i].language.name === "en") {
            description = data.flavor_text_entries[i].flavor_text;
            break;
        }
    }

    return description.replace(/[^\w ,.é]/g, "");
}

async function get_pokemon(name) {
    if (local_data.pokemons[name].description === undefined) {
        local_data.pokemons[name].description = await get_pokemon_description(
            name
        );
    }

    return local_data.pokemons[name];
}

export { get_pokemons, get_next_pokemons, get_pokemon };

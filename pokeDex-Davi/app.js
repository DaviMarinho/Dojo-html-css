const poke_container = document.getElementById('poke_container');
const pokemon_number = 386;

const getRandomPokemon = async () => {
    const numPokedex = Math.round(Math.random()*pokemon_number)
    await getPokemon(numPokedex);
}

const listAllPokemon = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    pokeCard(pokemon);
}

const pokeCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const {id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
    <div class="img-container">
        <img src = "${sprites.front_default}" alt="${name}/>
    </div>
    <div class = "info">
        <h4 class = "number">${id}</h4>
        <h3 class = "name">${name}</h3>
        <h4 class = "type">Type: <span>${type}</span></h4>
    </div>`;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

var randomPoke = document.createElement("button");
randomPoke.innerHTML = "Random Pokemon";

var body = document.getElementsByTagName("body")[0];
body.appendChild(randomPoke);

randomPoke.addEventListener ("click", function() {
    getRandomPokemon()
});

var listAllPoke = document.createElement("button");
listAllPoke.innerHTML = "List All Pokemon";

var body = document.getElementsByTagName("body")[0];
body.appendChild(listAllPoke);

listAllPoke.addEventListener ("click", function() {
    listAllPokemon()
});


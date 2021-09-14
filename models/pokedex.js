
const knex = require("./knex");

//Edit queries:
const insertPokemon = (pokemon) => knex("pokedex").insert(pokemon);
const deletePokemon = (id) => knex("pokedex").where("id", id).del();
const updatePokemon = (id, car) => knex("pokedex").where("id", id).update(car);

//Show queries:
const listAllPokemon = () => knex("pokedex").select("*");
const showPokemon = (nameid) => knex("pokedex").where("nameid", nameid).select("*");

//Search queries:
const listByName = (name) =>knex('pokedex').where('name', 'like', `%${name}%`);
const listByType = (type) =>knex('pokedex').where('type', 'like', `%${type}%`);

//knex('pokedex').where('name', 'like', `%${name}%`);


module.exports = {
    insertPokemon,
    listAllPokemon,
    deletePokemon,
    updatePokemon,
    showPokemon,
    listByName,
    listByType
}



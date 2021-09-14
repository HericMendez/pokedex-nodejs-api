const db = require("../models/pokedex");

module.exports = (app) => {
  app.get("/list", async (req, res) => {
    try {
      const pokemons = await db.listAllPokemon();
      res.status(200).json(pokemons);
    } catch (error) {
      res.status(400).json({ error });
      console.error(error);
    }
  });

  app.get("/pokemon/:nameid", async (req, res) => {

    try {
    const results = req.params.nameid;
    const name = await db.showPokemon(results);
    console.log(results);
    res.status(200).json(name[0]);
    } catch (error) {
      res.status(400).json({ error });
      console.error(error);
    }
  });
};

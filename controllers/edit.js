const db = require("../models/pokedex");
const attributes = require("../dataManipulation/attributes");

module.exports = (app) => {
  app.post("/edit", async (req, res) => {
    try {
      const pokemon = req.body;
      const atr = attributes(pokemon);
      const obj = { ...pokemon, ...atr };
      const results = await db.insertPokemon(obj);
      res.status(201).json({ id: results[0] });
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
  });

  app.patch("/edit/:id", async (req, res) => {
    const id = await db.updatePokemon(req.params.id, req.body);
    res.status(200).json({ id });
  });

  app.delete("/edit/:id", async (req, res) => {
    await db.deletePokemon(req.params.id);
    res.status(200).json({ success: true });
  });
};

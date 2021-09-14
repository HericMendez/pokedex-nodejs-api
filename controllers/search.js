const db = require("../models/pokedex");
const attributes = require("../dataManipulation/attributes");

module.exports = (app) => {
  app.get("/list/name/:name", async (req, res) => {
    try {
      const searchName = req.params.name;
      const name = await db.listByName(searchName);
      //console.log(searchName);
      res.status(200).json(name);
    } catch (error) {
      res.status(400).json({ error });
      console.error(error);
    }
  });

  app.get("/list/type/:type", async (req, res) => {
    try {
      const searchType = req.params.type;
      const type = await db.listByType(searchType);
      //console.log(searchType);
      res.status(200).json(type);

    } catch (error) {
      res.status(400).json({ error });
      console.error(error);
    }
  });
};

const express = require("express");
const cors = require('cors');
const consign = require("consign");



module.exports = () => {
    
  const app = express();

  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  app.use(cors());

  consign().include("controllers").into(app);

  return app;
};
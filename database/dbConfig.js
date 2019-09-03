const knex = require("knex");

const knexConfig = require("../knexfile.js");

const environment = "testing";

module.exports = knex(knexConfig[environment]);

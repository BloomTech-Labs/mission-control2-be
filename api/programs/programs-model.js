const db = require("../../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("programs");
}

function findById(id) {
  return db("programs").where({ id }).first();
}

function add(program) {
  return db("programs")
    .insert(program, "id")
    .then(([id]) => {
      return this.findById(id);
    });
}

function update(id, changes) {
  return db("programs").where({ id }).update(changes, "*");
}

function remove(id) {
  return db("programs").where({ id }).del();
}

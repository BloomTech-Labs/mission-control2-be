const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
}

function find() {
  return db('persons')
}

function findById(id) {
  return db('persons').where({ id }).first()
}

function add(person) {
  console.log('*** HELLO ***', person)
  return db('persons')
    .insert(person, 'id')
    .then((ids) => ({ id: ids[0] }))
}

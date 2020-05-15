const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  findByEmail,
  add,
  update,
  remove,
}

function find() {
  return db('persons')
}

function findByEmail(email) {
  return db('persons').where({ email }).first()
}

function findById(id) {
  return db('persons').where({ id }).first()
}

function add(person) {
  return db('persons')
    .insert(person, 'id')
    .then(([id]) => {
      return this.findById(id)
    })
}

function update(id, changes) {
  return db('persons').where({ id }).update(changes, '*')
}

function remove(id) {
  return db('persons').where({ id }).del()
}

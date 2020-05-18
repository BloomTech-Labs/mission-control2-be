const db = require('../../data/db-config')

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
}

function find() {
  return db('products')
}

function findById(id) {
  return db('products').where({ id }).first()
}

function add(product) {
  return db('products')
    .insert(product, 'id')
    .then(([id]) => {
      return this.findById(id)
    })
}

function update(id, changes) {
  return db('products').where({ id }).update(changes, '*')
}

function remove(id) {
  return db('products').where({ id }).del()
}

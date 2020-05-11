exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('programs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([
        { id: 1, name: 'Avengers', codeClimateToken: '' },
      ])
    })
}

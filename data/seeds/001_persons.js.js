exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('persons')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        { id: 1, name: 'Tony Stark', email: 'Tony@test.com' },
        { id: 2, name: 'Steve Rogers', email: 'Steve@test.com' },
        { id: 3, name: 'Thor Odinson', email: 'Thor@test.com' },
        { id: 4, name: 'Bruce Banner', email: 'Bruce@test.com' },
        { id: 5, name: 'Clint Barton', email: 'Clint@test.com' },
        { id: 6, name: 'Natasha Romanoff', email: 'Natasha@test.com' },
        { id: 7, name: 'Peter Parker', email: 'Peter@test.com' },
        { id: 8, name: 'Wanda Maximoff', email: 'Wanda@test.com' },
        { id: 9, name: 'Pietro Maximoff', email: 'Pietro@test.com' },
        { id: 10, name: 'Victor Shade', email: 'Victor@test.com' },
        { id: 11, name: 'Hank Pym', email: 'Hank@test.com' },
        { id: 12, name: 'Bucky Barnes', email: 'Bucky@test.com' },
      ])
    })
}

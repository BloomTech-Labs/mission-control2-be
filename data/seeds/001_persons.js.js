exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('persons')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        { name: 'Tony Stark', email: 'Tony@test.com' },
        { name: 'Steve Rogers', email: 'Steve@test.com' },
        { name: 'Thor Odinson', email: 'Thor@test.com' },
        { name: 'Bruce Banner', email: 'Bruce@test.com' },
        { name: 'Clint Barton', email: 'Clint@test.com' },
        { name: 'Natasha Romanoff', email: 'Natasha@test.com' },
        { name: 'Peter Parker', email: 'Peter@test.com' },
        { name: 'Wanda Maximoff', email: 'Wanda@test.com' },
        { name: 'Pietro Maximoff', email: 'Pietro@test.com' },
        { name: 'Victor Shade', email: 'Victor@test.com' },
        { name: 'Hank Pym', email: 'Hank@test.com' },
        { name: 'Bucky Barnes', email: 'Bucky@test.com' },
      ])
    })
}

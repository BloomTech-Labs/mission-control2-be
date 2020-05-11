exports.up = function (knex) {
  return (
    knex.schema
      // Persons Table
      .createTable('persons', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Email
        tbl.string('email', 255).notNullable().unique()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Programs Table
      .createTable('programs', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Code Climate Token
        tbl.string('codeClimateToken', 255).notNullable().unique()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })

      // Products Table
      .createTable('products', (tbl) => {
        // ID
        tbl.increments()
        // Name
        tbl.string('name', 255).notNullable()
        // Program Key (FK)
        tbl
          .integer('programKey')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('programs')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
        // Active
        tbl.boolean('active').notNullable()
        // Created_At
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        // Updated_At
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
      })
  )
}

exports.down = function (knex) {}

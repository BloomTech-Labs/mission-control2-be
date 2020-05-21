// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
    },

    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },

    staging: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },

    production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  },
}

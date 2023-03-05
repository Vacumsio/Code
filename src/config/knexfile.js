// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "admin",
    },
    debug: true,
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

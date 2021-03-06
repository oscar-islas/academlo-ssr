const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER_,
    password: process.env.DB_PASSWORD_,
    database: process.env.DB_NAME_,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: 'DATABASE_URL_AWS',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}

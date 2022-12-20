// src/sequelize/config/index.js
import "dotenv/config";
var config = {
  development: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  },
  test: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE,
    logging: false
  },
  production: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE,
    logging: false
  }
};
var config_default = config;
export {
  config_default as default
};

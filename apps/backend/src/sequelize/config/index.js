import 'dotenv/config'

const config = {
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
}

export default config

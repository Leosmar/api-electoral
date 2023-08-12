require("dotenv").config();

module.exports = {
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,       
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
};

require('dotenv').config();

const ENVIRONMENT = process.env.ENVIRONMENT || "development";
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Kolab";
const PORT = process.env.PORT || 8080;
const secret = process.env.SECRET || "not-so-secret";
const APP_URL = process.env.APP_URL || "http://localhost:8082";
const ADMIN_URL = process.env.ADMIN_URL || "http://localhost:8083";
const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY;

module.exports = {
  PORT,
  MONGO_URL,
  secret,
  APP_URL,
  ADMIN_URL,
  ENVIRONMENT,
  SENDINBLUE_API_KEY
};

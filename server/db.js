import pg from "pg";
const { Pool } = pg;
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export const opendB = () => {
  switch (process.env.DB_LOCATION) {
    case "local":
      return new Pool({
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      });

    case "remote":
      return new Pool({
        databse: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync(`${__dirname}/DB_SSL/root.crt`).toString(),
          key: fs.readFileSync(`${__dirname}/DB_SSL/server.key`).toString(),
          cert: fs.readFileSync(`${__dirname}/DB_SSL/server.crt`).toString(),
        },
      });
  }
};

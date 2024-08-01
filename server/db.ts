import { Client } from "pg";

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: "fuegomail",
  port: 5432,
});

client.connect().then(() => console.log("Connected to DB"));

export default client;

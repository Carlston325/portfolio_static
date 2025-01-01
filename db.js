import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "CarlstonRebelo_0325",
  port: 5432,
});

export default pool;

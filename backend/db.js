import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "CarlstonRebelo_0325",
  port: 5432,
});

export const profileImageSources = [
  "./assets/images/Profile/carlston_1.png",
  "./assets/images/Profile/carlston_2.png",
  "./assets/images/Profile/carlston_3.png",
  "./assets/images/Profile/carlston_4.png",
];

export default pool;

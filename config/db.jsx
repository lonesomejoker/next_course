import mysql from "mysql2/promise";

//mysql.createConnection() //for development

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Qwerty@123",
  database: "hospital_db",
});

try {
  const connection = await db.getConnection();
  console.log("✔️ Database connected successfully.");
  connection.release();
} catch (err) {
  console.log("❌ Connection Failed:", err);
  process.exit(1); //stop server
}

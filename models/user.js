const sqlite3 = require('sqlite3').verbose();

class User {
  constructor(db, id, username, email, password) {
    this.db = db;
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static async createTable(db) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);
  }

  async save() {
    await this.db.run(`
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?);
    `, this.username, this.email, this.password);
  }

  static async findByEmail(db, email) {
    const row = await db.get(`
      SELECT * FROM users
      WHERE email = ?;
    `, email);
    if (!row) return null;
    return new User(db, row.id, row.username, row.email, row.password);
  }

  static async findById(db, id) {
    const row = await db.get(`
      SELECT * FROM users
      WHERE id = ?;
    `, id);
    if (!row) return null;
    return new User(db, row.id, row.username, row.email, row.password);
  }
}

module.exports = { User };
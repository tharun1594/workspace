const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();
const dbPath = path.join(__dirname, "goodreads.db");
let db = null;
const initializeDbServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3010, () => {
      console.log("Server running at http://localhost:3010/");
    });
  } catch (error) {
    console.log(`DB error: ${error.message}`);
    process.exit(1);
  }
};
initializeDbServer();

app.get("/books/", async (request, response) => {
  try {
    const getBooksQuery = `
    SELECT * 
    FROM book 
    ORDER BY book_id;
    `;
    const bookArray = await db.all(getBooksQuery);
    response.send(bookArray);
  } catch (error) {
    console.log(`DB error: ${error.message}`);
  }
});

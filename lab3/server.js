const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1>Witaj!</h1>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/date">Date</a></li>
    </ul>
  `);
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact.html"));
});

app.get("/date", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "date.html"));
});

app.listen(port, () => {
  console.log(`Serwer działa: http://localhost:${port}`);
});

const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    const newUser = {
      id: users.length + 1,
      name,
      email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  });
module.exports = app;
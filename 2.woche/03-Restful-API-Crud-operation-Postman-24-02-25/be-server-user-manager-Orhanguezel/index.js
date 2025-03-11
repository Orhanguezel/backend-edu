import express from "express";

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "I find myself in tolerable health and spirits.",
  },
  {
    id: 2,
    name: "Charles Dickens",
    status: "I am a rather elderly",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.json(user);
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (status === undefined) {
    return res.status(400).json({ message: "Status is missing" });
  }

  const updatedUser = { ...users[userIndex], status };
  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json("User deleted");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

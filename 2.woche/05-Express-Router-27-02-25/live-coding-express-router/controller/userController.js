const users = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Sara",
    age: 28,
  },
];

export const getUsers = (req, res) => {
  res.json(users);
};

export const addUser = (req, res) => {
  const { name, age } = req.body;
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  res.json(newUser);
};

export const editUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const userIndex = users.findIndex((x) => x.id === Number(id));

  if (userIndex === -1) {
    return res.json({ error: "user not found!" });
  }
  if (name !== undefined) {
    users[userIndex].name = name;
  }
  if (age !== undefined) {
    users[userIndex].age = age;
  }
  res.json({ message: "User updated successfuly", users });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((x) => x.id === Number(id));
  if (userIndex === -1) {
    return res.json({ error: "user not found!" });
  }
  users.splice(userIndex, 1);
  res.json({ message: "user deleted", users });
};

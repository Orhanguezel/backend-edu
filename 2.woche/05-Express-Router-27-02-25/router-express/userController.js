let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 }
];

export const getUser = (req, res) => {
    res.json(users);
};

export const createUser = (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === Number(id));
    if (!foundUser) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.json(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === Number(id));
    if (!foundUser) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    users = users.filter((user) => user.id !== Number(id));
    res.json({ message: `User with id ${id} deleted` });
};

export const editUser = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
    if (name) user.name = name;
    if (age) user.age = age;
    res.json({ message: `User with id ${id} has been updated`, user });
};

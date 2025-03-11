const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bobi Johnson", email: "johnson@example.com" },
  ];



  export const getUser = (req, res) => {
    res.json(users);
    if(users.length === 0){
      res.send("No user found");
    }
  }

  export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  }


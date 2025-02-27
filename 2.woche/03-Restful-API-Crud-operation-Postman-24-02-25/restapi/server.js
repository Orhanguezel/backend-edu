import express from 'express';
import fs from "node:fs"

const app = express();
const PORT = 3001;

app.use(express.json());

// crud app

//read operation
app.get('/users', (req, res) => {
    const users = fs.readFileSync('./data.json', 'utf8');
    res.json(JSON.parse(users));
});

//create operation

app.post('/users', (req, res) => {
    const users= JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    const {name, message} = req.body;
    const newUser = {id:users.length + 1, name, message};
    users.push(newUser);
    fs.writeFileSync('./data.json', JSON.stringify(users, null, 2));
    res.json("alles gut");
}
);

//update operation

app.patch('/users/:id', (req, res) => {
    const {id} = req.params;
    const users = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    const {name, message} = req.body;
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if(userIndex === -1){
        res.status(404).json({message: "User not found"});
        return;
    }
    if(name === undefined || message === undefined){
        res.status(400).json({message: "Name or message is missing"});
        return;
    }

    const updatedUser = {...users[userIndex], name, message};
    users[userIndex] = updatedUser;
    fs.writeFileSync('./data.json', JSON.stringify(users, null, 2));
    res.json(updatedUser);

    //res.json("update operation");
}
);


//delete operation

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    const users = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if(userIndex === -1){
        res.status(404).json({message: "User not found"});
        return;
    }
    users.splice(userIndex, 1);
    fs.writeFileSync('./data.json', JSON.stringify(users, null, 2));
    res.json({message :"User are deleted"});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
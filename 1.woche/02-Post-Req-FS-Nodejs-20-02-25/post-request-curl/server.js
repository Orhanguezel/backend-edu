import express from "express";

const app = express();

app.use(express.json());

const port = 3001;

// get data from the endpoint using curl :curl http://localhost:3001/players

app.get("/", (req, res) => {
  res.json("Hello World"); // text/plain
});

const players = [
  { id: 1, name: "Lionel Messi", club: "Paris Saint-Germain" },
  { id: 2, name: "Cristiano Ronaldo", club: "Manchester United" },
  { id: 3, name: "Neymar Jr", club: "Paris Saint-Germain" },
  { id: 4, name: "Kylian Mbappe", club: "Paris Saint-Germain" },
  { id: 5, name: "Mohamed Salah", club: "Liverpool" },
  { id: 6, name: "Robert Lewandowski", club: "Bayern Munich" },
  { id: 7, name: "Kevin De Bruyne", club: "Manchester City" },
  { id: 8, name: "Erling Haaland", club: "Borussia Dortmund" },
  { id: 9, name: "Harry Kane", club: "Tottenham Hotspur" },
  { id: 10, name: "Romelu Lukaku", club: "Chelsea" },
];

app.get("/players", (req, res) => {
  res.json(players); // application/json
});

const logEndpoints = () => {
    console.log("📌 Tanımlı Endpoints:");
    app._router.stack
      .filter((r) => r.route) // Sadece route olanları al
      .map((r) => {
        const methods = Object.keys(r.route.methods)
          .map((m) => m.toUpperCase())
          .join(", ");
        const url = `http://localhost:${port}${r.route.path}`;
        console.log(`${methods}: ${url}`);
      });
  };
  

// -X post : Method nennen
// -H "Content-Type: application/json" : Header setzen
// -d : Daten senden   // -d '{"id": 11, "name": "Sadio Mane", "club": "Liverpool"}' : Daten senden

// curl -X POST http://localhost:3001/add-player -H "Content-Type: application/json" -d '{"name": "Sadio Mane", "club": "Liverpool"}'

app.post("/add-player", (req, res) => {
  console.log(req.body);
  const newPlayer = req.body;
  players.push(newPlayer);
  res.json(players);
  //players.push(req.body);
  //res.json(players);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logEndpoints();
});

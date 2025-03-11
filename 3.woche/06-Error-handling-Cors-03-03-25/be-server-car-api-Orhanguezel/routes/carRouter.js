import express from "express";

const router = express.Router();

// Task-3
const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];
// Task-4
router.get("/", (req, res) => {
  res.status(200).json(cars);
});

// Task-5
router.get("/:id", (req, res) => {
    const id = Number(req.params.id); 
    
    if (Number.isNaN(id)) {
        res.status(400).send("Bad Request");
        return;
    }
    const car = cars.find(car => car.id == id);
    if(car){
        res.status(200).json(car);
    } else {
        res.status(404).send("Car not found");
    }
});

// Task-6
router.post("/create", (req, res) => {
    const carData = req.body;
    if (!carData.id || !carData.name) {
        return res.status(400).send("Bad Request");
    }

    const newCar = { id: carData.id, name: carData.name };
    cars.push(newCar);
    res.status(200).json(newCar);
});

// Task-7
router.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    const carData = req.body;
    if (isNaN(carData.id) ) {
        return res.status(400).send("Bad Request");
    }

    const car = cars.find(car => car.id == id);
    if(car){
        car.name = carData.name;
        res.status(200).json(car);
    } else {
        res.status(404).send("Car not found");
    }
});

// Task-8

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id); 
    
    if (isNaN(id)) {
        return res.status(400).send("Bad Request");
    }

    const carIndex = cars.findIndex(car => car.id === id); 
    if (carIndex !== -1) {
        cars.splice(carIndex, 1);
        return res.status(200).json(cars); 
    } else {
        return res.status(404).send("Car not found");
    }
});



export default router;

import express from "express"; // 1.


const app = express();  //2.
const port = 3001;


app.get("/hello" , (req, res) => {   // 3.
    res.send("Hello to you too!")
})

app.get("/time", (req,res)=>{

res.send(new Date().toString()) // 4.
})

app.get("/random", (req,res)=> {   // 5.
    res.send((Math.random() * 100).toString())
})

app.get("/fact", (req,res)=>{
    res.send("JavaScript was created in about 10 days!") //6.
})


const server = app.listen(3001, ()=>{
    console.log(`Server is running on port ${port}`);
})





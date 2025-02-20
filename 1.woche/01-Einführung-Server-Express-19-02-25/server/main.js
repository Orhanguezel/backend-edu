// console.log(process);

//if(Math.random()>.5){
  //  process.exit()  // 
// }


// console.log('Server is running');

import express from "express"  // 1.schritt

const app = express();  // 2.schritt

app.get('/',(req,res)=>{  // 4.schritt
  res.send('<h1>Hello World</h1>');
  console.log("Request from browser")
})

app.get("/products",(req,res)=>{  // 5.schritt
  res.send('<h1>Products</h1>');
  console.log("Sony Xperia")
})

const port = 4000;  // 6.schritt

app.listen(port,()=>{  //3.schritt
  console.log('Server is running on ',port);
})

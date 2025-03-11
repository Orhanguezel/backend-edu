const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "This is product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      description: "This is product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.99,
      description: "This is product 3",
    },
  ];

   export const getProduct = (req, res) => {
        res.json(products);
        if(products.length === 0){
          res.send("No products found");
        }
      }
    
      export const getProductById = (req, res) => {
        const { id } = req.params;
        const product = products.find((product) => product.id === parseInt(id));
        if (product) {
          res.json(product);
        } else {
          res.status(404).send("Product not found");
        }
      }
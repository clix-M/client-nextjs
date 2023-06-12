import Product from "../model/Product";

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ // 201: Created
    product,
  });
};


export const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({  // 200: OK
    products,
  });
};

// ok
// export const getProduct = async (req, res, next) => {
//   const product = await Product.findById(req.params.id);   // req.params.id: id of the product 

//   if (!product) {
//     return res.status(404).json({ // 404: Not Found
//       message: "Product not found",
//     });
//   }

//   res.status(200).json({  // 200: OK
//     product,
//   });
// };

export const getProduct = async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return res.status(404).json({ // 404: Not Found
      message: "Product not found",
    });
  }
  res.status(200).json({ // 200: OK
    product,
  });
}


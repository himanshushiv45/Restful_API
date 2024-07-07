import productModel from "../models/productModel.js";

// getAll🔥
const getAllProducts = async (req, res) => {
  // const myData = await productModel.find({});
  // const myData = await productModel.find(req.query);

  // Add Company filter🔥
  // const {company} = req.query;
  // const queryObject = {}
  // if(company){
  //   queryObject.company = company;
  //   console.log(queryObject)
  // }
  // const myData = await productModel.find(queryObject)
  //   res.status(200).json({ message: "getAllProducts", Data : myData });
  // };

  // Add Company & name filter🔥
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  // regex search 🔥
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // Sorting🔥
  let apiData = productModel.find(queryObject);

  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let selectFix = select.split(",").join(" ");

    apiData = apiData.sort(sortFix);
  }

  // select method🔥

  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }


  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  // Pagination🔥
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  // const myData = await productModel.find(queryObject).sort(sort);
  const myData = await apiData.sort(sort);
  res.status(200).json({ message: "getAllProducts",ProductData: myData });
};

// testing 🔥
const getAllProductsTesting = async (req, res) => {
  // console.log(req.query);
  // const myData = await productModel.find(req.query);

  // const myData = await productModel.find({company:"mi"});

  // const myData = await productModel.find(req.query).sort("-name");

  // const myData = await productModel.find(req.query).sort("-name price");

  // sort = name,price

  // select method🔥

  // const myData = await productModel.find(req.query).select("name");
  // only name & company🔥
  // const myData = await productModel.find(req.query).select("name company");

  // Pagination🔥

  console.log(req.query);
  const myData = await productModel.find(req.query);

  res.status(200).json({ message: "getAllProductsTesting", nbHits: myData.length, ProductData: myData });
};

export { getAllProducts, getAllProductsTesting };

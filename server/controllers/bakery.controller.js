const Bakery = require("../models/bakery.model");

//* Create bakery item
const createProduct = (req, res) => {
    Bakery.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json(err));
};

//* Find All Products
const findAllProducts = (req, res) => {
    Bakery.find()
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json(err));
};

//* Find One Product
const findOneProduct = (req, res) => {
    const { id } = req.params;
    Bakery.findById(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(er));
};

//* Update One Product
const updateOneProduct = (req, res) => {
    const { id } = req.params;
    // * new: true gives us back the object after it has been update.
    // * By default it returns the object before it gets updated.
    // * runValidators: true runs the schema validations
    Bakery.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

// * Delete One Product
const deleteOneProduct = (req, res) => {
    const { id } = req.params;
    Bakery.findByIdAndDelete(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    createProduct,
    findAllProducts,
    findOneProduct,
    updateOneProduct,
    deleteOneProduct,
};

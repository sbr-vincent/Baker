const express = require("express");
const bakeryRouter = express.Router();
const {
    createProduct,
    findOneProduct,
    findAllProducts,
    updateOneProduct,
    deleteOneProduct,
} = require("../controllers/bakery.controller");

bakeryRouter
    .route('/')
    .get(findAllProducts)
    .post(createProduct)

bakeryRouter
    .route('/:id')
    .get(findOneProduct)
    .put(updateOneProduct)
    .delete(deleteOneProduct)

module.exports = bakeryRouter;
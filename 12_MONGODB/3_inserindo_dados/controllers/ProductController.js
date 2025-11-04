const Product = require('../models/Product');

module.exports = class ProductController {
    static async showProducts(req, res) {
        res.render('products/all');
    }

     static async createProducts(req, res) {
        res.render('products/create');
    }

    static async createProductsPost(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const product = new Product(name, price, description);
        await product.save();
        res.redirect('/products');
    }
};
'use strict';

const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const amazonController = {};

amazonController.getProductsHtml = (req, res, next) => {
    
    const url = 'https://www.amazon.com/s/?keywords=televisions&low-price=20&high-price=40&ref=sr_nr_p_72_0';
    request(url, (error, response, html) => {
        if (error) {
            //console.log('amazonController.js  - getProductsHtml - request error');
            err = new Error(`Error getting making request`);
            err.functionName = 'amazonController.getProductsHtml';
            err.status = 404;
            next(err);
        };
        let $ = cheerio.load(html);
        let products = [];
        for (let i = 0; i < 1; i++) {
            let product  = {};
            product.name = $('#result_' + i + ' h2').text();
            product.imageUrl = $('#result_' + i + ' .s-access-image').attr('src');
            product.manufacturer = $('result_' + i + ' .a-size-small.a-color-secondary').text();
            product.price = $('#result_' + i + ' .sx-price-whole').text();
            product.stars = $('#result_' + i + ' .a-icon-alt').last().text();
            product.startsCount = $('#result_' + i + ' .a-size-small.a-link-normal.a-text-normal').text();
            products.push(product);

            console.log('result_' + i + ': product.name: ' + product.name);
            console.log('result_' + i + ': product.imageUrl: ' + product.imageUrl);
            console.log('result_' + i + ': product.manufacturer: ' + product.manufacturer);
            console.log('result_' + i + ': product.price: ' + product.price);
            console.log('result_' + i + ': product.stars: ' + product.stars);
            console.log('result_' + i + ': product.startsCount: ' + product.startsCount);
        }

        res.locals.products = products;
        res.locals.amazonHtml = html;
        next();
    });
}

amazonController.getProductsHtmlLocal = (req, res, next) => {

    fs.readFile(__dirname + '/amazon.html', function read(err, html) {
        if (err) {
            throw err;
        }
        let $ = cheerio.load(html);
        let products = [];
        for (let i = 0; i < 5; i++) {
            let product  = {};
            product.name = $('#result_' + i + ' h2').text();
            product.asin = $('#result_' + i).attr('data-asin');
            product.imageUrl = $('#result_' + i + ' .s-access-image').attr('src');
            product.price = $('#result_' + i + ' .sx-price-whole').text();
            product.stars = $('#result_' + i + ' .a-icon-alt').last().text();
            product.startsCount = $('#result_' + i + ' .a-size-small.a-link-normal.a-text-normal').text();
            products.push(product);

            console.log('result_' + i + ': product.name: ' + product.name);
            console.log('result_' + i + ': product.asin: ' + product.asin);
            console.log('result_' + i + ': product.imageUrl: ' + product.imageUrl);
            console.log('result_' + i + ': product.manufacturer: ' + product.manufacturer);
            console.log('result_' + i + ': product.price: ' + product.price);
            console.log('result_' + i + ': product.stars: ' + product.stars);
            console.log('result_' + i + ': product.startsCount: ' + product.startsCount);
        }
        res.locals.products = products;
        res.locals.amazonHtml = html;
        console.log(products);
        next();
    });

}


module.exports = amazonController;



'use strict';

const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const amazonController = {};

// THIS FUNCTION REQUEST PAGES FROM AMAZON USING THE URL PROVIDED IT. IT THEN SCRAPES THE PAGE
amazonController.getProductsHtml = (req, res, next) => {
  const url = req.body.url;
  console.log('amazonController ===============', req.body);
  if (url) {
    request(url, (error, response, html) => {
      if (error) {
        err = new Error(`Error getting making request`);
        err.functionName = 'amazonController.getProductsHtml';
        err.status = 404;
        next(err);
      }
      res.locals.products = amazonController.createProductsObjFromHtml(
        cheerio.load(html)
      );
      next();
    });
  } else {
    err = new Error(`Bad URL`);
    err.functionName = 'amazonController.getProductsHtml';
    err.status = 404;
    next(err);
  }
};

// THIS FUNCTION LOADS DOWNLOADED FILES WHICH ARE GOOD IF AMAZON BLOCKS YOU (sameple files in the amazonOptions folder)
amazonController.getProductsHtmlLocal = (req, res, next) => {
  const url = '/amazonOptions/pens.html';
  fs.readFile(__dirname + url, function read(error, html) {
    if (error) {
      err = new Error(`Error reading file`);
      err.functionName = 'amazonController.getProductsHtmlLocal';
      err.status = 404;
      next(err);
    }
    res.locals.products = amazonController.createProductsObjFromHtml(cheerio.load(html));
    next();
  });
};

amazonController.createProductsObjFromHtml = $ => {
  let products = [];
  for (let i = 0; i < 5; i++) {
    let keywords = $('#s-result-count span span.a-color-state.a-text-bold')
      .text()
      .replace('"', '')
      .replace('"', '');
    let name = $('#result_' + i + ' h2').text();
    let asin = $('#result_' + i).attr('data-asin');
    let url = $('#result_' + i + ' h2')
      .parent()
      .attr('href');
    let urlStart = url.indexOf('www.amazon.com');
    url = 'http://' + unescape(url.slice(urlStart));
    let imageUrl = $('#result_' + i + ' .s-access-image').attr('src');
    let manufacturer = $('result_' + i + ' a-size-small.a-color-secondary')
      .last()
      .text();
    let price = $('#result_' + i + ' .sx-price-whole')
      .last()
      .text();
    let stars = $('#result_' + i + ' .a-icon-alt')
      .last()
      .text();
    let reviews = $('#result_' + i + ' .a-size-small.a-link-normal.a-text-normal').text();

    let product = {
      keywords,
      name,
      asin,
      url,
      imageUrl,
      manufacturer,
      price,
      stars,
      reviews
    };
    products.push(product);

    console.error(`=============================`);
    // console.log('result_' + i + ': product.keywords: ' + product.keywords);
    // console.log('result_' + i + ': product.name: ' + product.name);
    // console.log('result_' + i + ': product.asin: ' + product.asin);
    // console.log('result_' + i + ': product.url: ' + product.url);
    // console.log('result_' + i + ': product.imageUrl: ' + product.imageUrl);
    // console.log('result_' + i + ': product.manufacturer: ' + product.manufacturer);
    // console.log('result_' + i + ': product.price: ' + product.price);
    // console.log('result_' + i + ': product.stars: ' + product.stars);
    console.log('result_' + i + ': product.reviews: ' + product.reviews);
  }
  return products;
};

module.exports = amazonController;

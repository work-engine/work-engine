class AmazonProductsFinder {

  constructor(amazonProductsController, amazonProductsModel) {
    this.amazonProductsController = amazonProductsController;
    this.amazonProductsModel = amazonProductsModel;
  }

  init() {
    this.createForm();
    this.initFormEvents();
  }

  createForm() {
      let str = `
      <div id="amazonProductFinderContainer">
        <div id="productsformHeaders" class="columns">  
            <div class="column">Keyword</div>
            <div class="column">Min Price</div>
            <div class="column">Max Price</div>
            <div class="column">Stars</div>
            <div class="column">Remove</div>
        </div>
        <div id="productsFormProducts"></div>
        <div id="productsFormFooters" class="">
            <button id="addProduct">Add Product</button>
            <button id="findTopProducts">Find Top Products</button>
        </div>
      </div>`;
      $('#amazonProductFinderContainer').html(str);
  }

  initFormEvents() {
    $('#addProduct').click((e) => {
      this.productFormMakeRow();
    });
    $('#findTopProducts').click((e) => {
      this.findTopProducts();
    });
    this.productFormMakeRow();
  }

  productFormMakeRow() {
    this.productFormInsertRowHtml();
    this.productFormInitEvents();
  }

  productFormInsertRowHtml(){
    let str = `
    <div class="productsFormRow columns">
      <div class="column"><input class="productKeyword" type="text" value="keyword"/></div>
      <div class="column"><input class="productMinPrice" type="text" value="0" /></div>
      <div class="column"><input class="productMaxPrice" type="text" value="10" /></div>
      <div class="column"><input class="productStarRating" type="text" value="3" /></div>
      <div class="column"><input class="productDelete" type="checkbox" /></div>
    </div>
    `;
    $('#productsFormProducts').append(str);
  }

  productFormInitEvents(){ 
    $('.productsFormRow .productDelete').click(e =>{
      $(e.target).parent().remove();
    });
  }

  findTopProducts() {
    // disable the events for the buttons
    // render the html headers
    const products = this.createProductsArray();
    const productsUrls = this.createProductUrls(products);
    console.log(productsUrls);
    productsUrls.forEach(productUrl =>{
      this.sendProductUrlToServer(productUrl);
    });
  }

  sendProductUrlToServer(productsUrl) {
    console.log(`sendProductUrlToServer ${productsUrl}`);
    fetch('/api/go', {
      method: 'POST',
      body: JSON.stringify({url: productsUrl});
    })
      .then(res => { return res.json() })
      .then(products => {
        console.log('products', products);
        cb(products);
      })
      .catch(error => console.error('Error:', error));
  }

  createProductUrls(products) {
    // loop thru all the product rows
    // make a array of URL to send to the server
    let productsUrls = [];
    const baseUrl = 'https://www.amazon.com/s/?';
    products.forEach((product) => {
      let productUrl = '';
      let keywords = 'keywords=' + product.keyword;
      let minPrice = 'low-price=' + product.minPrice;
      let maxPrice = 'high-price=' + product.maxPrice;
      let starRating = 'ref=sr_nr_p_72_';
      switch (product.starRating) {
  
        case 4:
          starRating += '0';
          break;
  
        case 3:
          starRating += '1';
          break;
  
        case 2:
          starRating += '2';
          break;
  
        case 1:
          starRating += '3';
          break;
  
        default:
          starRating += '0';
      }
      productUrl = `${baseUrl}${keywords}&${minPrice}&${maxPrice}&${starRating}`;
      productsUrls.push(productUrl);
    });
    return productsUrls;
  }

  createProductsArray() {
    let products = [];
    let productRows = $('#productsFormProducts .productsFormRow').length;
    for (let i = 1; i <= productRows; i++) {
      let product = {};
      product.keyword = $('#productsFormProducts .productsFormRow:nth-child(' + i + ') .productKeyword').val();
      product.minPrice = $('#productsFormProducts .productsFormRow:nth-child(' + i + ') .productMinPrice').val();
      product.maxPrice = $('#productsFormProducts .productsFormRow:nth-child(' + i + ') .productMaxPrice').val();
      product.starRating = $('#productsFormProducts .productsFormRow:nth-child(' + i + ') .productStarRating').val();
      // console.log(`product: ${product}`);
      products.push(product);
    }
    return products;
  }

  showProductsForm() {
    //this.createForm();
    //this.initFormEvents();
   // $('#amazonProductFinderContainer').show();
   // this.amazonProductsController.loadProducts();
  }

  hideProductsForm() {
    $('#amazonProductFinderContainer').hide();
  }
}


/*//
  https://www.amazon.com/s/?keywords=desk+lamps&low-price=20&high-price=40&ref=sr_nr_p_72_0
  
  Price Ranges
  &low-price=80&high-price=100&ref=sr_nr_p_72_0
  
  Star Ratings
  ref=sr_nr_p_72_0 - 4 stars and up
  ref=sr_nr_p_72_1 - 3 stars and up
  ref=sr_nr_p_72_2 - 2 stars and up
  ref=sr_nr_p_72_3 - 1 star and up
//*/

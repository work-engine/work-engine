class AmazonProductsDisplay {

    constructor(amazonProductsPresenter) {
        this.amazonProductsPresenter = amazonProductsPresenter;
    }

    init() {
        this.productsDisplayContainer = $('#amazonProductsDisplayContainer');
        this.productsDisplayCreate();
        this.productsDisplayProducts = $('#productsDisplayProducts');
        this.backToProductsFinderButton = $('#backToProductFinder');
        this.addSelectedProductsToCart = $('#addSelectedProductsToCart');
        this.productsDisplayEventsInit();

        // test data for 1 row can be made to the display UI
        // const productsSample = [{name: 'test products', imageUrl: '/.jpg', url: '.html', price: '30', stars: '3', starsCount:'200', asin: 'B077SCNCHF'}];
        // this.productsDisplayEvent_showProducts(productsSample);
    }

    // productsDisplayCreate - inserts it's html into the dom
    productsDisplayCreate() {
        this.productsDisplayContainer.html('');
        let str = `
        <h1 class="column centerText card blue-grey darken-1 white-text">Products</h1>
        <div id="productsDisplayHeaders" class="tableHeader columns">  
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Image</h5></div>    
            <div class="column is-one-third centerText card blue-grey darken-1 white-text"><h5>Description</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Price</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Stars</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Reviews</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Add to Order</h5></div>
        </div>
        <div id="productsDisplayProducts" class="tableBody"></div>
        <div id="productsDisplayFooters" class="tableFooter">
          <button id="backToProductFinder" class="btn waves-effect waves-light blue-grey darken-1">Back to Product Finder <i class="material-icons right">send</i></button>
          <button id="addSelectedProductsToCart" class="btn waves-effect waves-light blue-grey darken-1">Add Selected to Amazon Cart<i class="material-icons right">send</i></button>
        </div>`;
        this.productsDisplayContainer.html(str).fadeIn();
    }

    // productsDisplayEventsInit - initializes button events for newly created html
    productsDisplayEventsInit() {
        this.backToProductsFinderButton.click(e => {
            this.productsDisplayProducts.html('');
            this.amazonProductsPresenter.productsDisplayEvent_backToProductsFinderClicked();
        });
        this.addSelectedProductsToCart.click(e => {
            let asins = this.helper_createProductAsinsArray();
            if (asins.length) {
                this.amazonProductsPresenter.productsDisplayEvent_addToCartClicked(asins);
            }
        });
    }

    // productsDisplayEventsInit - event from presenter that passes an array of products to this function to render a row for each product
    productsDisplayEvent_showProducts(products) {
        products.forEach((product, i) => {
            let str = `
            <div class="productRow columns">
              <div class="column"><img src="${product.imageUrl}" width="200px" /></div>
              <div class="column is-one-third centerText card blue-grey"><a target="_blank" class="white-text" href="${product.url}">${product.name}</a></div>
              <div class="column centerText centerText card blue-grey white-text">$${product.price}</div>
              <div class="column centerText centerText card blue-grey white-text">${product.stars}</div>
              <div class="column centerText centerText card blue-grey white-text">${product.reviews}</div>
              
        
             <div class="column centerText">
             <div class="column centerText"><input class="productSelected" type="checkbox" /><input type="hidden" class="asin" value="${product.asin}" /></div>
         </div>`;




            this.productsDisplayProducts.append(str).fadeIn(200 + i * 50);
        });
    }

    // helper_createProductAsinsArray - loops thru the table and gathers the hidden asin values into an array
    helper_createProductAsinsArray() {
        let productAsins = [];
        let productRows = $('#productsDisplayProducts .productRow').length + 1;
        for (let i = 1; i < productRows; i++) {
            if ($('#productsDisplayProducts .productRow:nth-child(' + i + ') .productSelected').is(":checked")) {
                let asin = $('#productsDisplayProducts .productRow:nth-child(' + i + ') .asin').val();
                productAsins.push(asin);
            }
        }
        return productAsins;
    }

}

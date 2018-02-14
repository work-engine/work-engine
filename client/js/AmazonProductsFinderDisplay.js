class AmazonProductsFinderDisplay {
  constructor(amazonProductsPresenter) {
    this.amazonProductsPresenter = amazonProductsPresenter;
  }

  init() {
    this.amazonProductsFinderDisplayContainer = $(
      '#amazonProductsFinderDisplayContainer'
    );
    this.productFinderCreate();

    this.addProductButton = $('#addProduct');
    this.productFinderEventsInit();
  }

  productFinderCreate() {
    this.amazonProductsFinderDisplayContainer.html('');
    let str = `
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Work Engine</span>
              <p>Find the top 5 most popular results for any item you're search for on Amazon.</p>
            </div>
            <div class="card-action">
            </div>
          </div>
        </div>
      </div>
      <div id="amazonProductsFinder">
        <div id="productFinderHeaders" class="tableHeader columns">
            <div class="column centerText is-one-third card blue-grey darken-1 white-text"><h5>Keyword</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Min Price</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Max Price</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Stars</h5></div>
            <div class="column centerText card blue-grey darken-1 white-text"><h5>Remove</h5></div>
        </div>
        <div id="productFinderProducts" class="tableBody"></div>
        <div id="productFinderFooters" class="tableFooter">
        <button class="btn waves-effect waves-light blue-grey darken-1" type="submit" name="action" id="addProduct">Add Product
            <i class="material-icons right">send</i>
          </button>
        <button class="btn waves-effect waves-light blue-grey darken-1" type="submit" name="action" id="findTopProducts">Find Top Products
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>`;
    this.amazonProductsFinderDisplayContainer.html(str);
  }

  productFinderEventsInit() {
    $('#addProduct').click(e => {
      this.productFinderMakeRow();
    });
    $('#findTopProducts').click(e => {
      const products = this.helper_createProductsArray();
      if (products.length) {
        fetch('/api/history/save', {
          method: 'POST',
          body: JSON.stringify(products),
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        })
        .then(res => res.json())
        .then(data => {
          console.log('This is the result of history', data);
          this.amazonProductsPresenter.productsFinderDisplayEvent_findTopProducts(products);
        });
      }
    })
  }

  productFinderMakeRow() {
    this.productFinderInsertFormRowHtml();
    this.productFinderInitFormRowEvents();
  }

  productFinderInsertFormRowHtml() {
    let str = `
    <div class="productFormRow columns">
      <div class="column centerText is-one-third"><input class="productKeyword centerText" type="text" value="pens"/></div>
      <div class="column centerText"><input class="productMinPrice centerText" type="text" value="1" /></div>
      <div class="column centerText"><input class="productMaxPrice centerText" type="text" value="10" /></div>
      <div class="column centerText"><input class="productStarRating centerText" type="text" value="4" /></div>
      
      <div class="column centerText">
        <input class="productDelete" type="checkbox" checked="checked" id="test6">
        <label for="test6"/>
      </div>
    </div>`;
    $('#productFinderProducts').append(str);
  }

  productFinderInitFormRowEvents() {
    $('.productFormRow .productDelete').click(e => {
      $(e.target)
        .parent()
        .parent()
        .remove();
    });
  }

  // helper_createProductAsinsArray - loops thru the table and gathers the hidden asin values into an array
  helper_createProductsArray() {
    let products = [];
    let productRows = $('#productFinderProducts .productFormRow').length;
    for (let i = 1; i <= productRows; i++) {
      let product = {};
      product.keyword = $(
        '#productFinderProducts .productFormRow:nth-child(' + i + ') .productKeyword'
      ).val();
      product.minPrice = $(
        '#productFinderProducts .productFormRow:nth-child(' + i + ') .productMinPrice'
      ).val();
      product.maxPrice = $(
        '#productFinderProducts .productFormRow:nth-child(' + i + ') .productMaxPrice'
      ).val();
      product.starRating = $(
        '#productFinderProducts .productFormRow:nth-child(' + i + ') .productStarRating'
      ).val();
      // console.log(`product: ${product}`);
      products.push(product);
    }
    return products;
  }
}

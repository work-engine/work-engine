class AmazonProductsDisplay {

    constructor(amazonProductsController, amazonProductsModel) {
        this.amazonProductsController = amazonProductsController;
        this.amazonProductsModel = amazonProductsModel;
    }
  
    init() {
        this.createProductsDisplay();
        this.initProductsDisplayEvents();
        this.productFormInsertRowHtml(productsArray);
    }

    createProductsDisplay() {
        let str = `
        <div id="productsDisplayHeaders" class="productsDisplayHeaders productsDisplayRow">  
            <div>Description with hyperlink</div>
            <div>Price</div>
            <div>Stars</div>
            <div>Star Count</div>
            <div>Add to Order</div>
        </div>
        <div id="productsDisplayProducts"></div>
        <div>
            <button id="editProducts">Edit Products</button>
        </div>`;
        $('#amazonProductsDisplayContainer').html(str);
    }
    initProductsDisplayEvents() {
        $('#editProducts').click((e) => {
            this.amazonProductsController.editProducts();
        });
      }
  
      productFormInsertRowHtml(){
        let str = `
        <div class="productsFormRow columns">
          <div class="column"><a href="${product.url}">${product.name}</a></div>
          <div class="column">${product.price}</div>
          <div class="column">${product.stars}</div>
          <div class="column">${product.starsCount}</div>
          <div class="column"><input class="productDelete" type="checkbox" /><input type="hidden" id="asin" value="${product.asin}" /></div>
        </div>
        `;
        $('#productsDisplayProducts').append(str);
      }

    show() {
        this.createProductsDisplay();
        $('#amazonProductsDisplayContainer').show();
      }
    
      hide() {
        $('#amazonProductsDisplayContainer').hide();
      }
}
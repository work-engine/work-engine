class AmazonProductsDisplay {

    constructor(amazonProductsController, amazonProductsModel) {
        this.amazonProductsController = amazonProductsController;
        this.amazonProductsModel = amazonProductsModel;
    }
  
    init() {
        this.createProductsDisplay();
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
        <div id="productsDisplay"></div>
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

    show() {
        this.createProductsDisplay();
        $('#amazonProductsDisplayContainer').show();
      }
    
      hide() {
        $('#amazonProductsDisplayContainer').hide();
      }
}
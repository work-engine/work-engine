class AmazonProductsController {

    constructor() {
        this.init();
    }
  
    init() {
        this.apm = new AmazonProductsModel(this);

        this.apf = new AmazonProductsFinder(this, this.apm);
        this.apf.init();

        this.apd = new AmazonProductsDisplay(this, this.apm);
        this.apd.init();
        
    }

    productsLoaded(products){
        console.log('AmazonProductsController: ' + products);
        //$('#amazonProductFinderContainer').hide();
        $('#amazonProductsDisplayContainer').show();
        this.apd.productFormInsertRowHtml(products);
    }

    loadProducts(){
        this.apf.showProductsForm();
        //this.apd.show();
    }

    editProducts(){
        this.apf.hideProductsForm();
        //this.apd.hide();
    }

/*//
  showProductsForm() {
    //this.createForm();
    //this.initFormEvents();
   // 
   // this.amazonProductsController.loadProducts();
  }

  hideProductsForm() {
    $('#amazonProductFinderContainer').hide();
  }
  show() {
    this.createProductsDisplay();
    $('#amazonProductsDisplayContainer').show();
  }

  hide() {
    $('#amazonProductsDisplayContainer').hide();
  }
//*/

}

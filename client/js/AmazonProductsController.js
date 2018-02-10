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

    loadProducts(){
        this.apf.showProductsForm();
        //this.apd.show();
    }


    editProducts(){
        this.apf.hideProductsForm();
        //this.apd.hide();
    }

}

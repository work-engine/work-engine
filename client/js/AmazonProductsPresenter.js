class AmazonProductsPresenter {

    constructor() {

    }

    init() {
        // CREATE AN INSTANCE OF - AmazonProductsModel
        this.apm = new AmazonProductsModel(this);

        // CREATE AN INSTANCE OF - AmazonProductsFinderDisplay
        this.apf = new AmazonProductsFinderDisplay(this);
        this.apf.init();

        // CREATE AN INSTANCE OF - AmazonProductsDisplay
        this.apd = new AmazonProductsDisplay(this);
        this.apd.init();
        $('#amazonProductsDisplayContainer').hide();
    }

//////////////////////////////////////////
// EVENTS FROM - amazonProductsFinderDisplay
//////////////////////////////////////////

    // EVENT FROM - amazonProductsFinderDisplay 
    productsFinderDisplayEvent_findTopProducts(products) {
        this.apm.findTopProducts(products);
        $('#amazonProductsFinderDisplayContainer').hide();
        $('#amazonProductsDisplayContainer').show();
    }

//////////////////////////////////////////
// EVENTS FROM - amazonProductsModel
//////////////////////////////////////////
    
    // EVENT FROM - amazonProductsModel
    productsModelEvent_productsLoaded(products) {
        this.apd.productsDisplayEvent_showProducts(products);
    }

//////////////////////////////////////////
// EVENTS FROM - amazonProductsDisplay
//////////////////////////////////////////

    // EVENT FROM - AmazonProductsPresenter - will pass the products array from the ajax to the display
    productsDisplayEvent_productsShow(products) {
        console.log(`AmazonProductsController: ${products}`);
        $('#amazonProductFinderDisplayContainer').hide();
        $('#amazonProductsDisplayContainer').show();
        this.apd.productsDisplayEvent_showProducts(products);
    }

    // EVENT FROM - productsDisplayEvent_backToProductsFinderClicked
    productsDisplayEvent_backToProductsFinderClicked() {
        // take the data from the display and populate the form object with it
        $('#amazonProductsFinderDisplayContainer').show();
        $('#amazonProductsDisplayContainer').hide();
    }

    // EVENT FROM - productsDisplayEvent_addToCartClicked
    productsDisplayEvent_addToCartClicked(asins) {
        let addToCartUrl = this.apm.helper_createAddToCartUrl(asins);
        let win = window.open(addToCartUrl, '_blank');
    }

}

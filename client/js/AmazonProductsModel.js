class AmazonProductsModel {

    constructor(amazonProducsController) {
        this.amazonProducsController = amazonProducsController;
        this.products = [];
    }
  
    init() {
        
    }

    getProducts() {
        return this.products;
    }

}
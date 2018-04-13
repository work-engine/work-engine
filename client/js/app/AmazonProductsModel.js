class AmazonProductsModel extends Model {

    constructor(amazonProductsPresenter) {
        super();
        this.amazonProductsPresenter = amazonProductsPresenter;
        this.products = [];
    }

    // Called from amazonProductsPresenter
    findTopProducts(products) {
        const productsUrls = this.createProductUrls(products);
        productsUrls.forEach(productUrl => {
            this.sendProductUrlToServer(productUrl);
        });
    }

    // Called from amazonProductsPresenter
    sendProductUrlToServer(productsUrl) {
        let body = JSON.stringify({ url: productsUrl });

        console.log(`sendProductUrlToServer - ${body}`);
        let apiUrl = '/api/amazon/go/local';
        //*//
        fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: body

        })
            .then(res => { return res.json() })
            .then(products => {
                console.log('attempting to send products', products);
                this.amazonProductsPresenter.productsModelEvent_productsLoaded(products);
            })
            .catch(error => console.error('Error:', error));
        //*/
    }

    createProductUrls(products) {
        // loop thru all the product rows
        // make a array of URL to send to the server
        let productsUrls = [];
        const baseUrl = 'https://www.amazon.com/s/?';
        products.forEach((product) => {
            let productUrl = '';
            let keywords = 'keywords=' + product.keyword.trim().replace(" ", "+");
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

    // createAddToCartUrl - generates an instant add to cart URL based on ASIN from scraped products
    createAddToCartUrl(asins) {
        const baseUrl = `https://www.amazon.com/gp/aws/cart/add.html?`;
        // Chris's AWS Access Key
        let awsKeys = `AWSAccessKeyId=AKIAJNLAGUG5AQBDB4YA`
        // The tag for the project
        awsKeys += `&AssociateTag=workengine123-20`;

        let asinStr = '';
        asins.forEach((asin, i) => {
            let j = i + 1;
            asinStr += `&ASIN.${j}=${asin}&Quantity.${j}=1`;
        });
        asinStr += `&add=add`;
        return `${baseUrl}${awsKeys}${asinStr}`;
    }

}
class AmazonProductsDisplay {

    constructor(amazonProductsController, amazonProductsModel) {
        this.amazonProductsController = amazonProductsController;
        this.amazonProductsModel = amazonProductsModel;
    }
  
    init() {
        this.createProductsDisplay();
        this.initProductsDisplayEvents();
    }

    createProductsDisplay() {
        let str = `
        <div id="productsDisplayHeaders" class="columns">  
            <div class="column">Description</div>
            <div class="column">Price</div>
            <div class="column">Stars</div>
            <div class="column">Star Count</div>
            <div class="column">Add to Order</div>
        </div>
        <div id="productsDisplayProducts"></div>
        <div>
            <button id="editProducts">Edit Products</button><button id="addSelectedProductsToCart">Add Selected Products to Amazon Cart</button>
        </div>`;
        $('#amazonProductsDisplayContainer').html(str);
    }
    initProductsDisplayEvents() {
        $('#editProducts').click((e) => {
            this.amazonProductsController.editProducts();
        });
        $('#addSelectedProductsToCart').click(e => {
            console.log('addSelectedProductsToCart');
            let asins = this.createProductAsinsArray();
            let addToCartUrl = this.createAddToCartUrl(asins);
            console.log('addToCartUrl' + addToCartUrl);
            let win = window.open(addToCartUrl, '_blank');
            // https://www.amazon.com/gp/aws/cart/add.html?AWSAccessKeyId=AKIAJNLAGUG5AQBDB4YA&AssociateTag=workengine123-20&ASIN.1=B00MQLB1N6&Quantity.1=1&ASIN.2=&Quantity.2=&add=add
        });
      }
      createAddToCartUrl(asins){
          const baseUrl = `https://www.amazon.com/gp/aws/cart/add.html?`;
          const awsKeys = `AWSAccessKeyId=AKIAJNLAGUG5AQBDB4YA&AssociateTag=workengine123-20`;

          `https://www.amazon.com/gp/aws/cart/add.html?
          AWSAccessKeyId=AKIAJNLAGUG5AQBDB4YA&AssociateTag=workengine123-20
          &ASIN.1=B00MQLB1N6&Quantity.1=1
          &ASIN.2=&Quantity.2=
          &add=add`

            //   `&ASIN.1=B00MQLB1N6&Quantity.1=1&ASIN.2=&Quantity.2=&add=add`
            let asinStr = '';
            asins.forEach((asin, i) => {
                let itemId = i + 1;
                asinStr += `&ASIN.${itemId}=${asin}&Quantity.${itemId}=1`;
            });
            asinStr += `&add=add`;
            return `${baseUrl}${awsKeys}${asinStr}`;
      }

      createProductAsinsArray() {
            // loop thru products
            // find ones that are checked
            // get the asin value for each one
            // build a url to add to cart
        let productAsins = [];
        let productRows = $('#productsDisplayProducts .productsFormRow').length;
        for (let i = 1; i <= productRows; i++) {
          if ($('#productsDisplayProducts .productsFormRow:nth-child(' + i + ') .productSelected').is(":checked")) {
            let asin = $('#productsDisplayProducts .productsFormRow:nth-child(' + i + ') .asin').val();
            // it is checked
            productAsins.push(asin);
            console.log(asin);
          }
        }
        console.log(productAsins);
        return productAsins;
      }

  
      productFormInsertRowHtml(products){
          console.log('productFormInsertRowHtml: ' + products);
          products.forEach(product => {
            let str = `
            <div class="productsFormRow columns">
              <div class="column">${product.name}</div>
              <div class="column">${product.price}</div>
              <div class="column">${product.stars}</div>
              <div class="column">${product.starsCount}</div>
              <div class="column"><input class="productSelected" type="checkbox" /><input type="hidden" class="asin" value="${product.asin}" /></div>
            </div>
            `;
            $('#productsDisplayProducts').append(str);
          });
      }
}

/*//
<form method="GET" action="https://www.amazon.com/gp/aws/cart/add.html"> 
<input type="hidden" name="AWSAccessKeyId" value="Access Key ID" /><br/> 
<input type="hidden" name="AssociateTag" value="Associate Tag" /><br/> 
<p>One Product<br/> 
ASIN:<input type="text" name="ASIN.1"/><br/> 
Quantity:<input type="text" name="Quantity.1"/><br/> 
<p>Another Product<br/> 
ASIN:<input type="text" name="ASIN.2"/><br/> 
Quantity:<input type="text" name="Quantity.2"/><br/> 
</p> 
<input type="submit" name="add" value="add" /> 
</form>

Append each set of parameters with a period, then a unique identifier, which establishes a relationship between the parameters (for example, "ASIN.1=[ASIN]&Quantity.1=1&ASIN.2=[Another ASIN]&Quantity.2=10").

//*/
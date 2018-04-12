define(["jquery", "fontawesome",  "Presenter", "Model", "Component", "AmazonProductsDisplay", "AmazonProductsFinderDisplay", "AmazonProductsModel", "AmazonProductsPresenter"], $ => {
// define(["jquery", "fontawesome",  "AmazonProductsPresenter"], $ => {
    $(() => {
         // AmazonProductsPresenter - creates and runs the front end for the amazon module
         apc = new AmazonProductsPresenter();
    });
});


/*//
"jquery": "//code.jquery.com/jquery-3.3.1.min.js"
<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>
<script src='js/AmazonProductsFinderDisplay.js'></script>
<script src='js/AmazonProductsDisplay.js'></script>
<script src='js/AmazonProductsModel.js'></script>
<script src='js/AmazonProductsPresenter.js'></script>
<script src="js/index.js"></script>
//*/
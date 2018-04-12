requirejs.config({
    "baseUrl": "js/app",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
      "fontawesome": "//use.fontawesome.com/releases/v5.0.0/js/all",
      "Component": "Component",
      "Model": "Model",
      "Presenter": "Presenter",
      "AmazonProductsPresenter": "AmazonProductsPresenter",
      "AmazonProductsModel": "AmazonProductsModel",
      "AmazonProductsDisplay": "AmazonProductsDisplay",
      "AmazonProductsFinderDisplay": "AmazonProductsFinderDisplay"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);

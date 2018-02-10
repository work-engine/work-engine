$(function () {
   /*//
    var socket = io();
    $('form').submit(function(){
        if($('#m').val().length) {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      }
    });

    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
      window.scrollTo(0, document.body.scrollHeight);
    });
    //*/

    productFormInit();
  });

function productFormInit () {
  console.log('yo yo');
  $('#addProduct').click((e)=>{
    productFormMakeRow ();
  });
  $('#findTopProducts').click((e) => {
    createProductUrls ();
  });
  productFormMakeRow();
}

function productFormMakeRow () {
    console.log('add row');

    let str = `
      <div class="formRow">
          <input class="productKeyword" type="text" size="40" value="keyword"/>
          <input class="productMinPrice" type="text"   size="10" value="0" />
          <input class="productMaxPrice" type="text"   size="10" value="10" />
          <input class="productStarRating" type="text" size="10" value="3" />
      </div>
      `;
      $('#productsForm').append(str);
}

function createProductUrls (){
  // loop thru all the product rows
  // make a array of URL to send to the server
  console.log($('#productsForm .formRow').length);
}


/*//

https://www.amazon.com/s/?keywords=desk+lamps&low-price=20&high-price=40&ref=sr_nr_p_72_0
Price Ranges
&low-price=80&high-price=100&ref=sr_nr_p_72_0
Star Ratings
ref=sr_nr_p_72_0 - 4 stars and up
ref=sr_nr_p_72_1 - 3 stars and up
ref=sr_nr_p_72_2 - 2 stars and up
ref=sr_nr_p_72_3 - 1 star and up


//*/
  // send a array of page urls when the form is clicked
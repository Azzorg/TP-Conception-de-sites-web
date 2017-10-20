
var sortByPrice = true;

$.getJSON( "../../data/products.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    console.log(val);

    if(sortByPrice == true){
      items.sort(function(a, b) {
        return a.price - b.price  ||  a.name.localeCompare(b.name);
      });
    }

    //Insere le produit dans la liste
    $( "#products-list" ).append(
      "<section class=\"not-last-prod-row\">\
        <a href=\"product.html\">\
          <h1>"+val.name+"</h1>\
          <img src=\"assets/img/"+val.image+"\" alt=\"image produit\">\
          <p>"+val.price+"</p>\
        </a>\
      </section>"
    );

  });

});

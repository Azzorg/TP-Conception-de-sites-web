
$(document).ready(function() {

    var lstShopProducts = [];
    var totalPrice = 0;


    lstShopProducts.push({id : "5", name : "Nikkon300", price : "200", quantity : "3"});
    lstShopProducts.push({id : "8", name : "iMac 13", price : "500", quantity : "1"});
    lstShopProducts.push({id : "11", name : "controlleur xbox", price : "29.99", quantity : "53"});


    addItemsToHtmlShopping();

    /* OnClick des boutons de suppréssion d'un produit */
    $(".remove-item-button").click(function(){
      var indexToRemove;
      indexToRemove = this.id.split("-")[1];
      console.log(indexToRemove);
      var indexToRemoveInArray;
      var responseConfirm = confirm("Voulez vous supprimer ce produit du panier?");
      if(responseConfirm == true){
        console.log("OK");
        $.each(lstShopProducts, function(index, value){
          console.log("prod id : " + value.id + " & index : " + indexToRemove);
          if(value.id === indexToRemove){
            indexToRemoveInArray = index;
          }
        });
        lstShopProducts.splice(indexToRemoveInArray, 1);
        addItemsToHtmlShopping();
      }
    });

    /* Ajout des élements au panier dans le html */
    function addItemsToHtmlShopping(){
      calculTotalPrice();
      if(lstShopProducts.length == 0){
        $("#main-cart").empty();
        $("#main-cart").append("<h1 id=\"shop-title\">Panier</h1><p id=\"emptyCart\">Aucun produit dans le panier.</p>");
      }
      else{
        $("#main-cart").empty();
        $("#main-cart").append ("<h1 id=\"shop-title\">Panier</h1>\
                                <table id=\"table-shop\">\
                                  <tr class=\"tr-border\">\
                                    <th></th>\
                                    <th>Produit</th>\
                                    <th>Prix unitaire</th>\
                                    <th>Quantité</th>\
                                    <th>Prix</th>\
                                  </tr>\"");

        $.each(lstShopProducts, function(index, value){

          $("#table-shop").append("<tr>\
                                    <td><button id=\"delete-"+value.id+"\" class=\"remove-item-button\">x</button></td>\
                                    <td><a href=\"product.html\">"+value.name+"</a></td>\
                                    <td>"+value.price+" $</td>\
                                    <td><button class=\"cart-button\">-</button>"+value.quantity+"<button class=\"cart-button\">+</button></td>\
                                    <td class=\"price\">"+value.price*value.quantity+" $</td>\
                                  </tr>\"");

        });

        $("#table-shop").after ("</table>\
                                <p class=\"total-cart\" id=\"total-amount\">Total : <b>"+totalPrice+" $</b></p>\
                                  <div class=\"final-buttons-cart\">\
                                  <div class=\"col2 cancel-button\">\
                                       <button  class=\"standardButton\">Vider le panier</button>\
                                  </div>\
                                  <form action=\"order.html\" class=\"col2 confirm-button\">\
                                    <input type=\"submit\" value=\"Commander\" class=\"standardButton\">\
                                  </form>\
                                </div>");


        }

    };

    /* Calcule le prix total du panier */
    function calculTotalPrice(){
      totalPrice = 0;
      $.each(lstShopProducts, function(index, value){
        totalPrice += value.price*value.quantity;
      });
    };


});

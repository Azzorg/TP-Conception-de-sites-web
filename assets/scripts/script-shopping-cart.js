
$(document).ready(function() {

    var lstShopProducts = [];
    var totalPrice = 0;

    lstShopProducts.push({id : "5", name : "Nikkon300", price : "200", quantity : "3"});


    addItemsToHtmlShopping();

    function addItemsToHtmlShopping(){
      calculTotalPrice();
      if(lstShopProducts.length == 0){
        $("#shop-title").after("<p id=\"emptyCart\">Aucun produit dans le panier.</p>");
        $("#table-shop").remove();
      }
      else{
        $("#empty-cart").remove();
        $("#table-shop").remove();
        $("#shop-title").after ("<table id=\"table-shop\">\
                                  <tr class=\"tr-border\">\
                                    <th></th>\
                                    <th>Produit</th>\
                                    <th>Prix unitaire</th>\
                                    <th>Quantité</th>\
                                    <th>Prix</th>\
                                  </tr>\"");

        $.each(lstShopProducts, function(index, value){

          $("#table-shop").append("<tr>\
                                    <td><button class=\"remove-item-button\">x</button></td>\
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
                                       <button id=\"delete-"+value.id+"\" class=\"standardButton\" onclick=\"onClickDelete(this.id)\">Vider le panier</button>\
                                  </div>\
                                  <form action=\"order.html\" class=\"col2 confirm-button\">\
                                    <input type=\"submit\" value=\"Commander\" class=\"standardButton\">\
                                  </form>\
                                </div>");


        }

    };

    function calculTotalPrice(){
      totalPrice = 0;
      $.each(lstShopProducts, function(index, value){
        totalPrice += value.price*value.quantity;
      });
    };

    function onClickDelete(id){
      if(confirm("Voulez vous supprimer ce produit du panier?") == true){
        $.each(lstShopProducts, function(index, value){
          if(value.id == id.split("-")[1]){
            console.log(id.split("-")[1]);
            
          }
        });
      }
    };



});

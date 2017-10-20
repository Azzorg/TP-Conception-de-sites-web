$(document).ready(function() {
    //Tableau avec id, name, price, quantity
    var lstShopProducts = [];
    var actualProductId = 1;
    var actualProduct;


    lstShopProducts.push({id : "2", name : "Nikkon300", price : "200", quantity : "3"});

    //Récupère l'id passé en paramètre dans l'url
    function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for(var i=0; i<sURLVariables.length; i++){
            var sParameterName = sURLVariables[i].split('=');
            if(sParameterName[0] == sParam){
                return sParameterName[1];
            }
        }
    }

    //Rempli la page html avec les informations dans le fichier Json products.json
    $.getJSON( "./data/products.json", function( data ) {
        var isFound = false;
        $.each( data, function( key, val ) {
            if(val.id == actualProductId){
                $('#product-name').html(val.name);
                $('#product-image').attr('src', "./assets/img/" + val.image);
                $('#product-desc').html(val.description);

                for(var i=0; i< val.features.length; i++){
                    $('#product-features').append('<li>' + val.features[i] + '</li>');
                }
                //var price = $.number(val.price, 2, ',');

                $('#product-price').html(val.price + " $");

                //Rempli la quantité si ce produit est déjà dans le panier
                for(var i=0; i < lstShopProducts.length; i++){
                    if(lstShopProducts[i].id == actualProductId){
                        $('.form-control').attr('value', lstShopProducts[i].quantity);
                    }
                }
                isFound = true;
                if(isFound){
                    actualProduct = val;
                }
            }
        })

        // Si l'élément n'a pas été trouvé dans le fichier jsons 
        //(<=> l'id envoyé dans l'url ne correspond à aucun produit présent dans le fichier json)
        if(!isFound){
            $('main').empty();
            $('header').after('<main><h1>Page non trouvée!</h1></main>');
        }

    });

    //Gestion du clic sur le bouton
    $('#add-to-cart-form button').click(function(e){
        e.preventDefault();
        var alreadyOrdered = false;
        for(var i=0; i<lstShopProducts.length; i++){
            if(lstShopProducts[i].id == actualProductId){
                lstShopProducts[i].quantity = $('.form-control').val();
                alreadyOrdered = true;
            }
        }

        if(!alreadyOrdered){
            lstShopProducts.push({id : actualProduct.id, name : actualProduct.name, price : actualProduct.price, quantity : $('.form-control').val()});
        }

        alert('Added to order : \n' + actualProduct.name + '\n With the quantity : ' + $('.form-control').val());
        console.log(lstShopProducts);
        $('#dialog').slideUp( 300 ).delay( 1000 ).fadeIn( 400 );
        $('#dialog').slideDown( 300 ).delay( 1000 ).fadeOut( 400 );

    });
});
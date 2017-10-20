$(document).ready(function() {
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

    $.getJSON( "./data/products.json", function( data ) {
        var isFound = false;
        $.each( data, function( key, val ) {
            if(val.id == 1){
                $('#product-name').html(val.name);
                $('#product-image').attr('src', "./assets/img/" + val.image);
                $('#product-desc').html(val.description);

                for(var i=0; i< val.features.length; i++){
                    $('#product-features').append('<li>' + val.features[i] + '</li>');
                }
                //var price = $.number(val.price, 2, ',');

                $('#product-price').html(val.price + " $");
                
                isFound = true;
            }

            if(isFound){
                return val;
            }
        })

        // Si l'élément n'a pas été trouvé dans le fichier jsons 
        //(<=> l'id envoyé dans l'url ne correspond à aucun produit présent dans le fichier json)
        if(!isFound){
                $('main').empty();
                $('header').after('<main><h1>Page non trouvée</h1></main>');
        }

    });

    
});
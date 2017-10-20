var nbProduit;

jQuery(function(){
    nbProduit = 2;
    if(nbProduit == 0){
        $('span.count').hide();
    }
    else{
        $('span.count').show();
        $('span.count').html(nbProduit) = nbProduit;
    }
})
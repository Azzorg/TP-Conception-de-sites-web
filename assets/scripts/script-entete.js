var nbProduit;

jQuery(function(){
    if(typeof localStorage!='undefined') {
        if(localStorage.length == 0){
            $('span.count').hide();
        }
        else{
            $('span.count').show();
            $('span.count').html(localStorage.length);
        }
    }
    else {
        alert("localStorage n'est pas supporté");
    }
})
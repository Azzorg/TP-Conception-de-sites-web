var nbProduit;

jQuery(function(){
    if(typeof localStorage!='undefined') {
        var count = 0;
        if(localStorage.getItem(-1) != null){
            count++;
        }
        if(localStorage.getItem(-2) != null){
            count++;
        }
        if(localStorage.length - count === 0){
            $('span.count').hide();
        }
        else{
            $('span.count').show();
            $('span.count').html(localStorage.length - count);
        }
    }
    else {
        alert("localStorage n'est pas supporté");
    }
})
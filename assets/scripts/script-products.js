
$(document).ready(function() {

  var items = new Array();
  var selectedItems = new Array();

  $.getJSON( "././data/products.json", function( data ) {
    var sortByPrice = true;
    items = data;
    selectedItems = items;

    }).done(function(){

      $('#cameras').click(function(){
        selectCategory("cameras");
        clearCategoryClasses();
        $("#cameras").addClass("selected");
      })
      $('#consoles').click(function(){
        selectCategory("consoles");
        clearCategoryClasses();
        $("#consoles").addClass("selected");
      })
      $('#screens').click(function(){
        selectCategory("screens");
        clearCategoryClasses();
        $("#screens").addClass("selected");
      })
      $('#computers').click(function(){
        selectCategory("computers");
        clearCategoryClasses();
        $("#computers").addClass("selected");
      })
      $('#all').click(function(){
        selectCategory("all");
        clearCategoryClasses();
        $("#all").addClass("selected");
      })


      sortJsonField("priceUp");

      /* Click criteria */
      $('#priceUp').click(function(){
        sortJsonField("priceUp");
        clearCriteriaClasses();
        $("#priceUp").addClass("selected");
      })
      $('#priceDown').click(function(){
        sortJsonField("priceDown");
        clearCriteriaClasses();
        $("#priceDown").addClass("selected");
      })
      $('#alphaUp').click(function(){
        sortJsonField("alphaUp");
        clearCriteriaClasses();
        $("#alphaUp").addClass("selected");
      })
      $('#alphaDown').click(function(){
        sortJsonField("alphaDown");
        clearCriteriaClasses();
        $("#alphaDown").addClass("selected");

      })



  });

  function selectCategory(category){
    selectedItems = [];
    if(category == "all"){
      selectedItems = items;
    }
    else{
      $.each( items, function( key, val ) {
        if(val.category == category){
          console.log(key)
          selectedItems.push(items[key]);
        }
      });
    }
  };

  function sortJsonField(field){
    function sortJson(a,b){
      if(field == "priceUp"){ return a.price > b.price? 1 : -1; }
      else if(field == "priceDown"){ return a.price > b.price? -1 : 1; }
      else if(field == "alphaUp"){
        let nameLowerCaseA = a.name.toLowerCase();
        let nameLowerCaseB = b.name.toLowerCase();
        return nameLowerCaseA > nameLowerCaseB? 1 : -1;}
      else if(field == "alphaDown"){
        let nameLowerCaseA = a.name.toLowerCase();
        let nameLowerCaseB = b.name.toLowerCase();
        return nameLowerCaseA > nameLowerCaseB? -1 : 1;}
    }
    selectedItems.sort(sortJson);
    addItemsToHtml();
  };

  function addItemsToHtml(){
    $( "#products-list" ).empty();
    $.each( selectedItems, function( key, val ) {
      console.log(val);

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

  };

  function clearCriteriaClasses(){
    $("#priceUp").removeClass();
    $("#priceDown").removeClass();
    $("#alphaUp").removeClass();
    $("#alphaDown").removeClass();
  };

  function clearCategoryClasses(){
    $("#cameras").removeClass();
    $("#consoles").removeClass();
    $("#screens").removeClass();
    $("#computers").removeClass();
    $("#all").removeClass();
  };

});

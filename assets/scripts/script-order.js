
$(document).ready(function() {

  $("#order-form").validate({
    rules : {
      firstname: {
        required : true,
        minlength : 2
      },
      lastname: {
        required : true,
        minlength : 2
      },
      email: {
        required : true,
        email : true
      },
      phone: {
        required : true,
        phoneUS : true
      },
      creditcard: {
        required : true,
        creditcard : true
      },
      creditcardexpiry: {
        required : true,
        creditcardexpiry : true
      },
    },
    messages : {
        firstname : {
          required : "test";
        }
    }
  });

  $.validator.addMethod("creditcardexpiry", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^(0[1-9]|1[012])\-([1-9]{2})/.test( value );
  }, 'La date d’expiration de votre carte de crédit est invalide. »');

});

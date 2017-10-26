$(document).ready(function() {
    var numCommande = JSON.parse(localStorage.getItem(-1));
    var user = JSON.parse(localStorage.getItem(-2));
    $("#confirmation-number").html(numCommande);
    $("#name").html(user.firstname + " " + user.lastname);
});
var purchase = document.querySelector("#initialprice_input");
var quantity = document.querySelector("#quantity_input");
var current = document.querySelector("#currprice_input");

var result = document.querySelector("#result");
var btn = document.querySelector("#btn");


btn.addEventListener("click", function check() {

    var purchaseAmount = parseFloat(purchase.value);
    var quantityInt = parseInt(quantity.value);
    var currentAmount = parseFloat(current.value);
    returnAmount = currentAmount - purchaseAmount;
    var percentage = (Math.abs(returnAmount) / purchaseAmount) * 100;
    var amount = Math.abs(returnAmount) * quantityInt;

    if (returnAmount < 0) {

        result.innerText = `You lost ${percentage.toFixed(
      2)}%. Your total loss is Rs.${amount.toFixed(2)}`;
        result.style.color = "#EF4444";

    } else {

        result.innerText = `You gained ${percentage.toFixed(
       2 )}%. Your total profit is Rs.${amount.toFixed(2)}`;
        result.style.color = "#10B981";

    }
});
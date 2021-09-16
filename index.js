var purchase_amount = document.querySelector("#initialprice_input");
var stocks_quantity = document.querySelector("#quantity_input");
var current_amount = document.querySelector("#currprice_input");

var result = document.querySelector("#result");
var btn = document.querySelector("#btn");


btn.addEventListener("click", function check() {

    var initial = Number(purchase_amount.value);
    var quantity = Number(stocks_quantity.value);
    var current = Number(current_amount.value);
    result.innerText = calculate_proft_and_loss(initial, quantity, current);


})

function calculate_proft_and_loss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var loss_percentage = (loss / (initial * quantity)) * 100;
        result.style.color = "#EF4444";
        var res = "Your total Loss is " + loss + " Loss Percentage is " + loss_percentage.toFixed(2) + "%";
        return res;
    } else if (current > initial) {
        var gain = (current - initial) * quantity;
        var gain_percentage = (gain / (initial * quantity)) * 100;
        result.style.color = "#10B981";
        var ret = "Your total Gain is " + gain + " Gain Percentage is " + gain_percentage.toFixed(2) + "%";
        return ret;
    } else {
        result.style.color = 'orange'
        var ret = "You are neither at profit nor at loss";
        return ret;
    }
}
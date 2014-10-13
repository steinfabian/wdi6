var exchangeRate = 0.5420;

var dollarAmount = 50;
console.log("$" + dollarAmount + " is £" + (dollarAmount * exchangeRate).toFixed(2) + ".");

var poundAmount = 75;
console.log("£" + poundAmount + " is $" + Math.round(poundAmount / exchangeRate).toFixed(2) + ".");


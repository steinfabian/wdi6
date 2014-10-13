var exchangeRate = 0.5420;

var dollarsToPounds = function(dollar) {
	console.log("$" + dollar + " is £" + (dollar * exchangeRate).toFixed(2) + ".");
}

dollarsToPounds(55);

var poundsToDollars = function(pound) {
	console.log("£" + pound + " is $" + (pound / exchangeRate).toFixed(2) + ".");
}

poundsToDollars(65);
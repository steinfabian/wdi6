var accounts = {
  checking: {
    balance: 0,
    deposit: function (amount) {
    	if (amount < 0) {
    		alert('You can only enter positive amounts');
    	} else if (amount > 0) {
		accounts.checking.balance += amount;
		}
    },
    withdraw: function (amount) {
    	if (amount < 0) {
    		alert('You can only enter positive amounts');
    	} else if (amount <= accounts.checking.balance) {
    		accounts.checking.balance -= amount;
    	} else if (amount <= (accounts.checking.balance + accounts.savings.balance)) {
    		var currentCheckingBalance = accounts.checking.balance;
    		var remainder = amount - currentCheckingBalance;
    		accounts.checking.balance -= currentCheckingBalance;
    		accounts.savings.balance -= remainder;
    	} else {
    		alert('Not enough funds');
    	}
    }
  },

  savings: {
    balance: 0,
    deposit: function (amount) {
    	if (amount < 0) {
    		alert('You can only enter positive amounts');
    	} else if (amount > 0) {
    		accounts.savings.balance += amount;
    	}
    },
    withdraw: function (amount) {
    	if (amount < 0) {
    		alert('You can only enter positive amounts');
    	} else if (amount <= accounts.savings.balance) {
    		accounts.savings.balance -= amount;
    	} else if (amount <= (accounts.savings.balance + accounts.checking.balance)) {
    		var currentSavingsBalance = accounts.savings.balance;
    		var remainder = amount - currentSavingsBalance;
    		accounts.savings.balance -= currentSavingsBalance;
    		accounts.checking.balance -= remainder;
    	} else {
    		alert('Not enough funds');
    	}
    }
  }
};

var ATM;

$(document).ready(function () {
	ATM = {
		// init: function () {

		// }
		ui: {
			$checkingDeposit: $('#checkingDeposit'),
			$checkingWithdrawal: $('#checkingWithdraw'),
			$checkingAmount: $('#checkingAmount'),
			$checkingBalance: $('#balance1'),
			$checkingAccount: $('#checkingAccount'),
			$savingsDeposit: $('#savingsDeposit'),
			$savingsWithdrawal: $('#savingsWithdraw'),
			$savingsAmount: $('#savingsAmount'),
			$savingsBalance: $('#balance2'),
			$savingsAccount: $('#savingsAccount')
		},
		updateChecking: function () {
			ATM.ui.$checkingBalance.text( '$' + accounts.checking.balance );
			ATM.ui.$checkingAmount.val('');

			if (accounts.checking.balance === 0) {
				ATM.ui.$checkingAccount.addClass('zero');
			} else {
				ATM.ui.$checkingAccount.removeClass('zero');
			}	
		},
		updateSavings: function () {
			ATM.ui.$savingsBalance.text( '$' + accounts.savings.balance );
			ATM.ui.$savingsAmount.val('');

			if (accounts.savings.balance === 0) {
				ATM.ui.$savingsAccount.addClass('zero');
			} else {
				ATM.ui.$savingsAccount.removeClass('zero');
			}
		},
	};

	ATM.ui.$checkingDeposit.on('click', function () {
		var amount = parseInt(ATM.ui.$checkingAmount.val());
		accounts.checking.deposit(amount);
		ATM.updateChecking();
	});

	ATM.ui.$checkingWithdrawal.on('click', function () {
		var amount = parseInt(ATM.ui.$checkingAmount.val());
		// update the account balance in memory
		accounts.checking.withdraw(amount);
		// update the account balance on screen
		// ATM.ui.$checkingBalance.text( '$' + accounts.checking.balance );
		// clear out the input
		// ATM.ui.$checkingAmount.val('');		

		ATM.updateChecking();
		ATM.updateSavings();
	});

	ATM.ui.$savingsDeposit.on('click', function () {
		var amount = parseInt(ATM.ui.$savingsAmount.val());
		accounts.savings.deposit(amount);
		ATM.updateSavings();
	});

	ATM.ui.$savingsWithdrawal.on('click', function () {
		var amount = parseInt(ATM.ui.$savingsAmount.val());
		accounts.savings.withdraw(amount);
		ATM.updateSavings();
		ATM.updateChecking();
	});

	ATM.updateChecking();
	ATM.updateSavings();
});
function CreateBankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.isActive = true;


    this.deposite = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {

        if (this.isActive && amount <= this.balance) {
            this.balance -= amount
            console.log('successfully withdrawn', amount);
        }
        else {
            console.log('Hey you have insuffient balance', this.balance)
        }


    }
    this.getTotalBalance = function () {
        console.log("Your tatal balance is", this.balance)
    }


};

let ac1 = new CreateBankAccount(1234, 'suraj', 'savings', 500)

let ac2 = new CreateBankAccount(12345, 'ritesh', 'savings', 500)


let ac3 = new CreateBankAccount(123456, 'amjad', 'savings', 500)

ac1.deposite(100)
ac1.withdraw(300);

ac2.deposite(200)
ac2.withdraw(100)

ac3.deposite(800)
ac3.withdraw(300)

console.log(ac1)
ac1.getTotalBalance()

let accounts = [ac1, ac2, ac3];

function getTotalBalance() {
    let total = 0;
    for (let i = 0; i < accounts.length; i++) {
        total += accounts[i].balance;
    }

    console.log(total)
}

this.deactivateAccount = function ()
{
    this.isActive = false;
    console.log("Account deactivated");
}



// var Notes_2000=true;
// var Notes_500=true;
// var Notes_200=false;
// var Notes_100=true;

// let SBI = {
//     userName: "ravi",
//     password: 1234,
// };

// let HDFC = {
//     userName: "suri",
//     password: 5678,
// };

// let AXIS = {
//     userName: "hussen",
//     password: 8899,
// };

// console.log(SBI)
// console.log(HDFC)
// console.log(AXIS)

// var BankBalance =1000;
// var TransferBankBalance =1000;

// let _user = prompt("Enter the UserName:")
// let _password = parseInt(prompt("enter the password:"))

// // console.log('userName :${_user},password :${_password}')

// if (
//     (_user === SBI.userName && _password === SBI.password) ||
//     (_user === HDFC.userName && _password === HDFC.password) ||
//     (_user === AXIS.userName && _password === AXIS.password)
// )

//     console.log("Welocome the ATM process......")

// else {
//     console.log("Invalid UserName & password......")
// }

// while (true) {
//     let options = {
//         Deposit: "1",
//         Withdraw: "2",
//         BalanceEnquiry: "3",
//         MoneyTransfer: "4",
//         MiniStatement: "5",
//         Exit: "6",
//     }
// }

// console.table(options)
// let opt = prompt("Chosse your options:")
// if (opt == options.Deposit)
//     console.log("Deposit process")
// var depositAmount = parseInt(prompt("Enter the deposit amount :"))
// if ((depositAmount < BankBalance) ||(depositAmount> BankBalance)|| (depositAmount==BankBalance)){
//     BankBalance= BankBalance+depositAmount
//     var PrintDepositAmount = `${depositAmount} Amount deposit successfully`
//     PrintMiniStatement.push(PrintDepositAmount)
// }

var Notes_2000 = true;
var Notes_500 = true;
var Notes_200 = false;
var Notes_100 = true;

let SBI = {
  userName: "sarath",
  Password: 1234,
  TransferUserName: "Munna",
  AccountNumber: "987654321666",
};

let Hdfc = {
  userName: "Krishna",
  Password: 3698,
  TransferUserName: "Raju",
  AccountNumber: "987654321777",
};

let axis = {
  userName: "sai",
  Password: 5697,
  TransferUserName: "Vijay",
  AccountNumber: "987654321888",
};

console.log(SBI);
console.log(Hdfc);
console.log(axis);

var BankBalance = 1000;
var TransferBankBalance = 1000;
var PrintMiniStatement = [];

let _user = prompt("Enter the UserName : ");
let _password = parseInt(prompt("enter the password :"));

// console.log(`userName : ${_user}, Password : ${_password}`)

if (
  (_user === SBI.userName && _password === SBI.Password) ||
  (_user === Hdfc.userName && _password === Hdfc.Password) ||
  (_user === axis.userName && _password === axis.Password)
) {
  console.log("Welcome to the ATM Process...");

  while (true) {
    let options = {
      Deposit: "1",
      Withdraw: "2",
      BalanceEnquiry: "3",
      MoneyTransfer: "4",
      MiniStatement: "5",
      Exit: "6",
    };

    console.table(options);

    let opt = prompt("choose your option : ");

    if (opt == options.Deposit) {
      console.log("Deposit Process");

      var DepositAmount = parseInt(prompt("Enter the deposit amount : "));

      if (
        DepositAmount < BankBalance ||
        DepositAmount > BankBalance ||
        DepositAmount == BankBalance
      ) {
        BankBalance = BankBalance + DepositAmount;
        var PrintDepositAmount = `${DepositAmount} Amount Deposited Successfully...`;
        PrintMiniStatement.push(PrintDepositAmount);
      }
    } else if (opt == options.Withdraw) {
      console.log("Withdraw Process");

      var WithdrawAmount = parseInt(prompt("Enter the withdraw amount : "));

      if (WithdrawAmount <= BankBalance) {
        BankBalance = BankBalance - WithdrawAmount;
        var PrintWithdrawAmount = `${WithdrawAmount} Amount Withdraw Successfully...`;
        PrintMiniStatement.push(PrintWithdrawAmount);

        let TotalCount = 0;

        // 2000 Notes Logic
        if (Notes_2000 && WithdrawAmount >= 2000) {
          Notes_Count_2000 = parseInt(WithdrawAmount / 2000); // 2   // 5000
          console.log(`2000 Notes : ${Notes_Count_2000}`);
          TotalCount = TotalCount + Notes_Count_2000; // 2
          WithdrawAmount -= Notes_Count_2000 * 2000; // 1000
        }
        // 500 Notes Logic
        if (Notes_500 && WithdrawAmount >= 500) {
          Notes_Count_500 = parseInt(WithdrawAmount / 500); // 2   // 5000
          console.log(`500 Notes : ${Notes_Count_500}`);
          TotalCount = TotalCount + Notes_Count_500; // 2
          WithdrawAmount -= Notes_Count_500 * 500; // 1000
        }
        // 200 Notes Logic
        if (Notes_200 && WithdrawAmount >= 200) {
          Notes_Count_200 = parseInt(WithdrawAmount / 200); // 2   // 5000
          console.log(`200 Notes : ${Notes_Count_200}`);
          TotalCount = TotalCount + Notes_Count_200; // 2
          WithdrawAmount -= Notes_Count_200 * 200; // 1000
        }

        // 100 Notes Logic
        if (Notes_100 && WithdrawAmount >= 100) {
          Notes_Count_100 = parseInt(WithdrawAmount / 100); // 2   // 5000
          console.log(`100 Notes : ${Notes_Count_100}`);
          TotalCount = TotalCount + Notes_Count_100; // 2
          WithdrawAmount -= Notes_Count_100 * 100; // 1000
        }

        console.log(`Total Notes Count : ${TotalCount}`);
      } else {
        console.log("insufficient Balance...");
      }
    } else if (opt == options.BalanceEnquiry) {
      console.log("BalanceEnquiry Process");
      console.log(`Your Bank Balance : ${BankBalance}`);
    } else if (opt == options.MoneyTransfer) {
      console.log("MoneyTransfer Process");
      let TransferUserID = prompt("Enter the Transfer User Name : ");
      let TransferBankAccount = prompt("Enter the Transfer Account Number : ");
      if (
        (TransferUserID === SBI.TransferUserName &&
          TransferBankAccount === SBI.AccountNumber) ||
        (TransferUserID === Hdfc.TransferUserName &&
          TransferBankAccount === Hdfc.AccountNumber) ||
        (TransferUserID === axis.TransferUserName &&
          TransferBankAccount === axis.AccountNumber)
      ) {
        console.log("Valid Credentials... Please transfer the amount...");
        var TransferAmount = parseInt(prompt("Enter the Transfer Amount : "));

        if (TransferAmount <= BankBalance) {
          TransferBankBalance += TransferAmount;
          BankBalance -= TransferAmount;
          console.log(`Transfer Bank Balance : ${TransferBankBalance}`);
          var PrintMoneyTransfer = `${TransferAmount} Amount Transferred to ${TransferUserID}`;
          PrintMiniStatement.push(PrintMoneyTransfer);
        } else {
          console.log("Insufficient Balance");
        }
      } else {
        console.log("invalid credentials...");
      }
    } else if (opt == options.MiniStatement) {
      console.log("MiniStatement Process");
      console.log(PrintMiniStatement);
    } else if (opt == options.Exit) {
      console.log("Thank you for banking...");
      break;
    } else {
      console.log("choose your correct option");
    }
  }
} else {
  console.log("Invalid UserName & Password");
}

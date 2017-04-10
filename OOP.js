class BankAccount{
  constructor(accName, accNo, accBalance){
this._accName = accName;
this._accNo = accNo;
this._accBalance = accBalance;
  }
  
  getAccNO(){
    return 'Your account number is '+ this._accNo;
  }
  
   getAccBalance(){
    return 'Your account number is '+ this.accBalance;
  }
}

class SavingsAccount extends BankAccount{
  constructor(accName, accNo, accBalance){
    new BankAccount(accName, accNo, accBalance);
    this.minDeposit = 1000;
  }
  
  function deposit(amt){
    if(amt<=0){
      return "You have not increased your account balance";
    }
    else{
      this.accBalance += amt;
      return "You have successfully deposited "+ this.accBalance;
    }
  }
}

class CurrentAccount extends BankAccount{
    constructor(accName, accNo, accBalance){
    new BankAccount(accName, accNo, accBalance);
    this.minDeposit = 5000;}
}

let acc = new SavingsAccount("Mazi", "0084453675",40000);
console.log(acc.deposit(56000));
let currAcc = new BankAccount("Mazi", "0084253675",40000);

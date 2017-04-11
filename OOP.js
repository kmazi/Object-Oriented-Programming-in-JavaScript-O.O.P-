class BankAccount{
  constructor(accName, accNo, accBalance){
this._accName = accName;
this._accNo = accNo;
this._accBalance = accBalance;
  }
   getAccBalance(){
    return 'Your account number is '+ this._accBalance;
  }
  
  getAccNO(){
    return 'Your account number is '+ this._accNo;
  }
  
}

class SavingsAccount extends BankAccount{
  constructor(accName, accNo, accBalance){
    super (accName, accNo, accBalance);
  this.minDeposit = 1000;
  }
  deposit(amt){
    if(amt<=0){
      return "You have not increased your account balance";
    }
    else{
      this._accBalance += amt;
      return "You have successfully deposited "+ this._accBalance;
    }
  }
}

class CurrentAccount extends BankAccount{
    constructor(accName, accNo, accBalance){
    this.minDeposit = 5000;}
}

let currAcc = new BankAccount("Mazi", "0084253675",40000);
let savAcc = new SavingsAccount("Mazi", "0084253675",40000);
console.log(savAcc.deposit(4000));


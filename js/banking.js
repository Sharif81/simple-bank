//handle deposit button even

document.getElementById('deposit-btn').addEventListener('click', function (){

  const DepositInput = document.getElementById('deposit-input');
  const DepositInputAmount = DepositInput.value;

  const DepositAmount = document.getElementById('deposit-amount');
  const CurrentDepositAmount = DepositAmount.innerText;
  const TotalDepositAmount =  parseFloat(CurrentDepositAmount) + parseFloat(DepositInputAmount);
  DepositAmount.innerText =  parseFloat(TotalDepositAmount);

  const BalanceAmount = document.getElementById('balance-amount');
  const CurrentBalanceAmount = BalanceAmount.innerText;
  const TotalBalanceAmount = parseFloat(CurrentBalanceAmount) + parseFloat(DepositInputAmount);
  BalanceAmount.innerText = parseFloat(TotalBalanceAmount);

  DepositInput.value = '';
  
});


document.getElementById('withdraw-btn').addEventListener('click', function (){
  
  const WithdrawInput = document.getElementById('withdraw-input');  
  const WithdrawInputAmount = WithdrawInput.value;
  
  const WithdrawAmount = document.getElementById('withdraw-amount');
  WithdrawAmount.innerText = WithdrawInputAmount;

  WithdrawInput.value = '';

  const WithdrawBalanceAmount = document.getElementById('balance-amount');
  const CurrentWithdrawBalanceAmount = WithdrawBalanceAmount.innerText;
  const TotalWithdrawBalanceAmount = parseFloat(CurrentWithdrawBalanceAmount) - parseFloat(WithdrawInputAmount);
  WithdrawBalanceAmount.innerText = parseFloat(TotalWithdrawBalanceAmount);

});
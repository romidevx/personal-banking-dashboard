import { transactions } from './data.js';
import { formatAmount } from './utils/formatAmount.js';


export function displayAmounts() {

  if (!transactions.length) {

    document.querySelector('.amounts').innerHTML = `
      <div class="amounts__card saldo">
      <h5 class="saldo__title">Balance</h5>
      <h2 class="saldo__amount">$0.00</h2>
      </div>

      <div class="amounts__card deposits">
        <h5 class="deposits__title">Deposits</h5>
        <h2 class="deposits__amount">$0.00</h2>
      </div>
          
      <div class="amounts__card  widthdraws">
        <h5 class="widthdraws__title">Expenses</h5>
        <h2 class="widthdraws__amount">$0.00</h2>
      </div>
        `;
    return;

  }

  // ==== FILTER ALL DEPOSITS ====
  const allDeposits = transactions.filter(transaction => transaction.category == 'deposit')

  const deposits = allDeposits.length == 0
    ? 0.00
    : allDeposits
      .map(item => item.amount)
      .reduce((sum, item) => sum + item);

  // ==== FILTER ALL EXPENSES ====
  const allSpendings = transactions.filter(transaction => transaction.category == 'spending')

  const spendings = allSpendings.length == 0
    ? 0.00
    : allSpendings
      .map(item => item.amount)
      .reduce((sum, item) => sum + item);

  // ACCOUNT BALANCE      
  const saldo = deposits - spendings;

  document.querySelector('.amounts').innerHTML = '';

  document.querySelector('.amounts').innerHTML += `
      <div class="amounts__card saldo">
        <h5 class="saldo__title">Balance</h5>
        <h2 class="saldo__amount">$${formatAmount(saldo)}</h2>
      </div>
  
      <div class="amounts__card deposits">
        <h5 class="deposits__title">Deposits</h5>
        <h2 class="deposits__amount">$${formatAmount(deposits)}</h2>
      </div>
          
      <div class="amounts__card  widthdraws">
        <h5 class="widthdraws__title">Expenses</h5>
        <h2 class="widthdraws__amount">$${formatAmount(spendings)}</h2>
      </div>
    `;

}

displayAmounts();
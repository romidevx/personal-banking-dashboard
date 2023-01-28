import { transactions } from './data.js';
import { formatAmount } from './utils/formatAmount.js';
import { formatData } from './utils/formatData.js';

// let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
//   'novembro', 'dezembro'];

function checkCategory(catType) {
  // DISPLAY BULLET RED, OR GREEN - DEPENDING ON THE CATEGORY TYPE
  return catType == 'spending' ? 'bullet-spending' : 'bullet-deposit';
}


export function displayTransactions(categoryType) {

  document.querySelector('.transactions').innerHTML = '';

  // IF THERES NO TRANSACTIONS, DISPLAY MESSAGE !!
  if (!transactions.length) {
    document.querySelector('.transactions').innerHTML = `
      <div class="transaction__item-card">
        <h4 class="item__card-title">
          No transactions to show
        </h4>
      </div>
    `;
    return;
  }

  // IF DEPOSITS BUTTON, OR SPENDINGS BUTTON CLICKED !!
  // FILTER TRANSACTIONS BY PARAM RECEIVED "categoryType" ABOVE
  if (categoryType) {

    let filteredTransactions = transactions.filter(item => item.category == categoryType);

    // DISPLAY TRANSACTIONS BY CATEGORY
    filteredTransactions.map(transaction => {
      document.querySelector('.transactions').innerHTML += `
        <div class="transaction__item-card">
          <h5 class="item__card-title">
            <span class="${checkCategory(transaction.category)}">&bull;</span> 
            ${transaction.title}
          </h5>
          <h5 class="item__card-amount">$${formatAmount(transaction.amount)}</h4>
          <h5 class="item__card-date">${formatData(transaction.data)}</h5>
        </div>
        `;
    });

  } else {

    // ELSE DISPLAY ALL CATEGORIES FOUND 
    transactions.map(transaction => {
      document.querySelector('.transactions').innerHTML += `
        <div class="transaction__item-card">
          <h5 class="item__card-title">
            <span class="${checkCategory(transaction.category)}">&bull;</span> 
            ${transaction.title}
          </h5>
          <h5 class="item__card-amount">$${formatAmount(transaction.amount)}</h4>
          <h5 class="item__card-date">${formatData(transaction.data)}</h5>
        </div>
        `;
    });

  }


}

displayTransactions();

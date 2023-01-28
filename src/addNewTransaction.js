import { transactions } from './data.js';
import { displayTransactions } from './displayTransactions.js';
import { displayAmounts } from './displayAmounts.js';

import { validateForm } from './utils/validateForm.js';

export function addNewTransaction(e) {
  e.preventDefault();

  let formData = document.querySelector('#form');

  if (validateForm(formData) == false) {
    return;
  }

  let newTransaction = {
    title: formData.title.value,
    amount: Number(formData.amount.value),
    data: new Date(),
    category: formData.category.value
  }

  console.log(newTransaction)

  transactions.push(newTransaction);

  document.querySelector('.add__transaction').style.visibility = 'hidden';

  document.querySelector('.error__message').style.display = 'none';

  //console.log('New Transaction: ', newTransaction);

  formData.reset();

  displayTransactions();

  displayAmounts();

  setTimeout(() => {
    document.querySelector('.message__container').style.visibility = 'visible';
  }, 400);

  setTimeout(() => {
    document.querySelector('.message__container').style.visibility = 'hidden';
  }, 2000);

}




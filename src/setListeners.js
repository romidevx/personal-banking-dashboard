import { displayTransactions } from './displayTransactions.js';
import { addNewTransaction } from './addNewTransaction.js';

export function setListeners() {


  // SHOW MODAL
  document.querySelector('.new__transaction button').addEventListener('click', function () {
    document.querySelector('.add__transaction').style.visibility = 'visible';

  })

  // CLOSE MODAL
  document.querySelector('.close__modal-button').addEventListener('click', function () {
    document.querySelector('.add__transaction').style.visibility = 'hidden';
  })

  // MODAL FORM SUBMIT
  document.querySelector('#form').addEventListener('submit', function (e) {

    addNewTransaction(e);
  })

  // BUTTON FILTER TRANSACTIONS BY DEPOSITS
  document.querySelector('.filter__transactions-all')
    .addEventListener('click', function () {
      //console.log('filter transactions by DEPOSITS..');
      displayTransactions('');
    })

  // BUTTON FILTER TRANSACTIONS BY DEPOSITS
  document.querySelector('.filter__transactions-deposits')
    .addEventListener('click', function () {
      //console.log('filter transactions by DEPOSITS..');
      displayTransactions('deposit');
    })

  // BUTTON FILTER TRANSACTIONS BY SPENDINGS
  document.querySelector('.filter__transactions-spendings')
    .addEventListener('click', function () {
      //console.log('filter transactions by SPENDINGS..');
      displayTransactions('spending');
    })

}


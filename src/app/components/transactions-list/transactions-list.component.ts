import { Component } from '@angular/core';
import { TRANSACTIONS } from 'src/app/data/transactions';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {
  transactions: Transaction[] = TRANSACTIONS;

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  deleteTransaction(transaction: Transaction) {
    let i = this.transactions.indexOf(transaction);

    if (i > -1) {
      this.transactions.splice(i, 1);
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction-preview',
  templateUrl: './transaction-preview.component.html',
  styleUrls: ['./transaction-preview.component.css']
})
export class TransactionPreviewComponent {
  @Input()
  transaction?: Transaction;

  @Output()
  onDeleteTransaction = new EventEmitter<Transaction>();

  deleteTransaction() {
    this.onDeleteTransaction.emit(this.transaction);
  }
}
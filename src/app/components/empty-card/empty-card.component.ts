import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: ['./empty-card.component.css']
})
export class EmptyCardComponent {

  @Output()
  addTransactionEvent = new EventEmitter<Transaction>();

  placeholders: string[] = ['Business', 'Name', 'Account', 'Date', 'Type', 'Amount'];
  business = '';
  name = '';
  account = '';
  date = null;
  type = '';
  amount = null;

  addTransaction() {
    const business = (document.querySelector('.form-control[placeholder="Business"]') as HTMLInputElement).value;
    const name = (document.querySelector('.form-control[placeholder="Name"]') as HTMLInputElement).value;
    const account = (document.querySelector('.form-control[placeholder="Account"]') as HTMLInputElement).value;
    const date = (document.querySelector('.form-control[placeholder="Date"]') as HTMLInputElement).valueAsNumber;
    const type = (document.querySelector('.form-control[placeholder="Type"]') as HTMLInputElement).value;
    const amount = (document.querySelector('.form-control[placeholder="Amount"]') as HTMLInputElement).valueAsNumber;

    const transaction: Transaction = {
      amount,
      date,
      business,
      name,
      type,
      account
    };

    this.addTransactionEvent.emit(transaction);
    this.business = '';
    this.name = '';
    this.account = '';
    this.date = null;
    this.type = '';
    this.amount = null;
  }
}

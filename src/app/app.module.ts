import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionPreviewComponent } from './components/transaction-preview/transaction-preview.component';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionPreviewComponent,
    EmptyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

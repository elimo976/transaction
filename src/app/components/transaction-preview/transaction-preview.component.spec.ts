import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPreviewComponent } from './transaction-preview.component';

describe('TransactionPreviewComponent', () => {
  let component: TransactionPreviewComponent;
  let fixture: ComponentFixture<TransactionPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionPreviewComponent]
    });
    fixture = TestBed.createComponent(TransactionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

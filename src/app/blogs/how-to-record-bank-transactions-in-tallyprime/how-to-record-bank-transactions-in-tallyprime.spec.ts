import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToRecordBankTransactionsInTallyprime } from './how-to-record-bank-transactions-in-tallyprime';

describe('HowToRecordBankTransactionsInTallyprime', () => {
  let component: HowToRecordBankTransactionsInTallyprime;
  let fixture: ComponentFixture<HowToRecordBankTransactionsInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToRecordBankTransactionsInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToRecordBankTransactionsInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

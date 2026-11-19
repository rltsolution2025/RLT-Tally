import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchBankTransactionsWithTallyprimeEntries } from './match-bank-transactions-with-tallyprime-entries';

describe('MatchBankTransactionsWithTallyprimeEntries', () => {
  let component: MatchBankTransactionsWithTallyprimeEntries;
  let fixture: ComponentFixture<MatchBankTransactionsWithTallyprimeEntries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchBankTransactionsWithTallyprimeEntries]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchBankTransactionsWithTallyprimeEntries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

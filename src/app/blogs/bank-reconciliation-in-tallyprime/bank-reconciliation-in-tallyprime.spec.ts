import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankReconciliationInTallyprime } from './bank-reconciliation-in-tallyprime';

describe('BankReconciliationInTallyprime', () => {
  let component: BankReconciliationInTallyprime;
  let fixture: ComponentFixture<BankReconciliationInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankReconciliationInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BankReconciliationInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

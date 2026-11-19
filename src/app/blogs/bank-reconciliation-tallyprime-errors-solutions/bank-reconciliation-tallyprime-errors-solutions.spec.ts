import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankReconciliationTallyprimeErrorsSolutions } from './bank-reconciliation-tallyprime-errors-solutions';

describe('BankReconciliationTallyprimeErrorsSolutions', () => {
  let component: BankReconciliationTallyprimeErrorsSolutions;
  let fixture: ComponentFixture<BankReconciliationTallyprimeErrorsSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankReconciliationTallyprimeErrorsSolutions]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BankReconciliationTallyprimeErrorsSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

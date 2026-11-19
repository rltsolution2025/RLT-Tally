import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimeBankReconciliationPracticalExample } from './tallyprime-bank-reconciliation-practical-example';

describe('TallyprimeBankReconciliationPracticalExample', () => {
  let component: TallyprimeBankReconciliationPracticalExample;
  let fixture: ComponentFixture<TallyprimeBankReconciliationPracticalExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimeBankReconciliationPracticalExample]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimeBankReconciliationPracticalExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

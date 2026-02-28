import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollIncomeTax } from './payroll-income-tax';

describe('PayrollIncomeTax', () => {
  let component: PayrollIncomeTax;
  let fixture: ComponentFixture<PayrollIncomeTax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollIncomeTax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollIncomeTax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

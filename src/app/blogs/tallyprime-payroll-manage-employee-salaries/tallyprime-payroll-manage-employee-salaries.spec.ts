import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TallyprimePayrollManageEmployeeSalaries } from './tallyprime-payroll-manage-employee-salaries';

describe('TallyprimePayrollManageEmployeeSalaries', () => {
  let component: TallyprimePayrollManageEmployeeSalaries;
  let fixture: ComponentFixture<TallyprimePayrollManageEmployeeSalaries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyprimePayrollManageEmployeeSalaries]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TallyprimePayrollManageEmployeeSalaries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

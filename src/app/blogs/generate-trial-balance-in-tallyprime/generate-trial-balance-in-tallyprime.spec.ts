import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerateTrialBalanceInTallyprime } from './generate-trial-balance-in-tallyprime';

describe('GenerateTrialBalanceInTallyprime', () => {
  let component: GenerateTrialBalanceInTallyprime;
  let fixture: ComponentFixture<GenerateTrialBalanceInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTrialBalanceInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GenerateTrialBalanceInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

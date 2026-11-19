import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackExpensesUsingCostCentresInTallyprime } from './track-expenses-using-cost-centres-in-tallyprime';

describe('TrackExpensesUsingCostCentresInTallyprime', () => {
  let component: TrackExpensesUsingCostCentresInTallyprime;
  let fixture: ComponentFixture<TrackExpensesUsingCostCentresInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackExpensesUsingCostCentresInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackExpensesUsingCostCentresInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

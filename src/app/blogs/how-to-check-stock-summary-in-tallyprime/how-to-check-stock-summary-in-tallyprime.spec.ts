import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCheckStockSummaryInTallyprime } from './how-to-check-stock-summary-in-tallyprime';

describe('HowToCheckStockSummaryInTallyprime', () => {
  let component: HowToCheckStockSummaryInTallyprime;
  let fixture: ComponentFixture<HowToCheckStockSummaryInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCheckStockSummaryInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCheckStockSummaryInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

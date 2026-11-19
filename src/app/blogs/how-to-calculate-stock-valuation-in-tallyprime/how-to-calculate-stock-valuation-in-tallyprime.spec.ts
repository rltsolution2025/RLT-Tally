import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCalculateStockValuationInTallyprime } from './how-to-calculate-stock-valuation-in-tallyprime';

describe('HowToCalculateStockValuationInTallyprime', () => {
  let component: HowToCalculateStockValuationInTallyprime;
  let fixture: ComponentFixture<HowToCalculateStockValuationInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCalculateStockValuationInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCalculateStockValuationInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToViewBalanceSheetInTallyprime } from './how-to-view-balance-sheet-in-tallyprime';

describe('HowToViewBalanceSheetInTallyprime', () => {
  let component: HowToViewBalanceSheetInTallyprime;
  let fixture: ComponentFixture<HowToViewBalanceSheetInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToViewBalanceSheetInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToViewBalanceSheetInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

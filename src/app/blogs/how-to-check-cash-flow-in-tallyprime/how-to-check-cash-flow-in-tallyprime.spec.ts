import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToCheckCashFlowInTallyprime } from './how-to-check-cash-flow-in-tallyprime';

describe('HowToCheckCashFlowInTallyprime', () => {
  let component: HowToCheckCashFlowInTallyprime;
  let fixture: ComponentFixture<HowToCheckCashFlowInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToCheckCashFlowInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToCheckCashFlowInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

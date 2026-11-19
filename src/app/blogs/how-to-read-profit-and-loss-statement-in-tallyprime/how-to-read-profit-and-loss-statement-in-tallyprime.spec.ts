import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowToReadProfitAndLossStatementInTallyprime } from './how-to-read-profit-and-loss-statement-in-tallyprime';

describe('HowToReadProfitAndLossStatementInTallyprime', () => {
  let component: HowToReadProfitAndLossStatementInTallyprime;
  let fixture: ComponentFixture<HowToReadProfitAndLossStatementInTallyprime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToReadProfitAndLossStatementInTallyprime]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowToReadProfitAndLossStatementInTallyprime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
